'use client';
import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Navbar from "../components/navbar";

interface Profile {
  display_name: string;
  email: string;
  id: string;
  images: Array<{ url: string }>;
  followers: { total: number };
}

interface Artist {
  name: string;
  genres: string[];
  images: Array<{ url: string }>;
  id: string;
}

interface Track {
  name: string;
  artistName: string;
  images: Array<{ url: string }>;
  id: string;
}

interface FakeProfile {
  name: string;
  avatar: string;
  spotifyProfile: string;
  bio: string;
  stats: Array<{ title: string; value: string }>;
}

const firstNames = ['Alex', 'Jamie', 'Taylor', 'Jordan', 'Morgan', 'Casey', 'Drew', 'Riley', 'Skyler', 'Parker'];
const lastNames = ['Smith', 'Johnson', 'Lee', 'Brown', 'Garcia', 'Martinez', 'Davis', 'Lopez', 'Wilson', 'Anderson'];

const getRandomName = () => `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white text-black bg-opacity-60 p-6 rounded-lg shadow-2xl flex flex-col items-center">
    <h3 className="text-lg font-bold text-pink-600 mb-6">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const ProfileAvatar = ({ images, displayName }: { images: Array<{ url: string }>; displayName: string }) => (
  <div className="w-32 h-32 mx-auto mb-4" style={{ borderRadius: '50%', backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {images.length > 0 ? (
      <img src={images[0]?.url} alt={`${displayName}'s Avatar`} className="w-full h-full rounded-full" />
    ) : (
      <FaUserCircle size={50} color="#fff" />
    )}
  </div>
);

const ProfileStats = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [topArtist, setTopArtist] = useState<Artist | null>(null);
  const [topTrack, setTopTrack] = useState<Track | null>(null);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [fakeProfiles, setFakeProfiles] = useState<FakeProfile[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('spotify_access_token');

    if (token) {
      // Fetch profile data
      fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error('Error fetching profile:', error));

      // Fetch top artist and track data
      fetch('https://api.spotify.com/v1/me/top/artists?limit=10', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => response.json())
        .then((data) => {
          const track = data.items[0]; 
          setTopTrack({
            name: track.name,
            artistName: track.artists[0].name,
            images: track.images,
            id: track.id,
          });
          setTopArtists(data.items);
        })
        .catch((error) => console.error('Error fetching top artists:', error));
    } else {
      console.error('No access token found');
    }
  }, []);

  useEffect(() => {
    if (topArtists.length > 0) {
      const genreCounts: Record<string, number> = {};
      topArtists.forEach((artist) => {
        artist.genres.forEach((genre) => {
          genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });
      });

      const commonGenres = Object.entries(genreCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([genre]) => genre);

      const generatedFakeProfiles = Array.from({ length: 5 }).map((_, index) => ({
        name: getRandomName(),
        avatar: '',
        spotifyProfile: `https://open.spotify.com/user/fake_user_${index + 1}`,
        bio: `Fan of ${commonGenres.join(', ')}`,
        stats: [
          { title: 'Total Playtime ⏳', value: `${Math.floor(Math.random() * 300) + 100} hours` },
          { title: 'Favourite Genre 🎸', value: commonGenres[index % commonGenres.length] },
          { title: 'Top Artist 🌟', value: topArtists[index % topArtists.length]?.name || 'Unknown' },
          { title: 'Total Playlists 📂', value: `${Math.floor(Math.random() * 50)}` },
          { title: 'Most Played Song 🎶', value: topArtists[index % topArtists.length]?.name || 'Unknown' },
          { title: 'Friends Connected 🤝', value: `${Math.floor(Math.random() * 100)}` },
        ],
      }));

      setFakeProfiles(generatedFakeProfiles);
    }
  }, [topArtists]);

  return (
    <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <Navbar />

      <section className="pt-20 text-black mt-20 mx-auto w-full max-w-5xl px-6 text-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <ProfileAvatar images={profile?.images || []} displayName={profile?.display_name || 'Unknown'} />
          <h1 className="text-4xl font-bold mb-2">{profile ? profile.display_name : 'User'}</h1>
          <p className="text-lg text-purple-600">{profile ? profile.email : 'No email available'}</p>
          <a
            href={profile ? `https://open.spotify.com/user/${profile.id}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-green-500 hover:text-green-600"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
              alt="Spotify Logo"
              className="w-6 h-6 mr-2"
            />
            <span className="font-semibold text-lg">View Spotify Profile</span>
          </a>
        </div>
      </section>

      <section className="mt-12 mb-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {fakeProfiles.map((fakeProfile, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-2xl mb-8">
            <h1 className="text-4xl font-bold">{fakeProfile.name}</h1>
            <p className="text-lg text-purple-600">{fakeProfile.bio}</p>
            <div className="mt-4">
              {fakeProfile.stats.map((stat, i) => (
                <p key={i}>
                  <strong>{stat.title}</strong>: {stat.value}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="mt-12 mb-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {['friends connected 🤝', 'top artist 🌟', 'most played song 🎶'].map((statTitle) => (
          <StatCard
            key={statTitle}
            title={statTitle}
            value={
              statTitle === 'friends connected 🤝'
                ? profile?.followers.total.toString() || 'Unknown'
                : statTitle === 'top artist 🌟'
                ? topArtist?.name || 'Unknown'
                : topTrack ? `${topTrack.name} by ${topTrack.artistName}` : 'Unknown'
            }
          />
        ))}
      </section>
    </main>
  );
};

export default ProfileStats;
