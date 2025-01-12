'use client';
import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Navbar from "../components/navbar";

interface Profile {
  display_name: string;
  email: string;
  id: string;
  images: Array<{ url: string }>;
  product: string;
  followers: { total: number };
}

interface Artist {
  name: string;
  genres: string[];
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

function getRandomName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

export default function ProfileStats() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [fakeProfiles, setFakeProfiles] = useState<FakeProfile[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('spotify_access_token');

    if (token) {
      // Fetch profile data
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error('Error fetching profile:', error));

      // Fetch top artist data
      fetch('https://api.spotify.com/v1/me/top/artists?limit=10', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setTopArtists(data.items))
        .catch((error) => console.error('Error fetching top artists:', error));
    } else {
      console.error('No access token found');
    }
  }, []);

  useEffect(() => {
    if (topArtists.length > 0) {
      // Deduce common genres
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

      // Generate fake profiles
      const fakeProfiles = Array.from({ length: 5 }).map((_, index) => ({
        name: getRandomName(),
        avatar: '', // Placeholder icon or random URL
        spotifyProfile: `https://open.spotify.com/user/fake_user_${index + 1}`,
        bio: `Fan of ${commonGenres.join(', ')}`,
        stats: [
          { title: 'total playtime ⏳', value: `${Math.floor(Math.random() * 300) + 100} hours` },
          { title: 'favourite genre 🎸', value: commonGenres[index % commonGenres.length] || 'Unknown' },
          { title: 'top artist 🌟', value: topArtists[index % topArtists.length]?.name || 'Unknown' },
          { title: 'total playlists 📂', value: `${Math.floor(Math.random() * 50)}` },
          { title: 'most played song 🎶', value: topArtists[index % topArtists.length]?.name || 'Unknown' },
          { title: 'friends connected 🤝', value: `${Math.floor(Math.random() * 100)}` },
        ],
      }));

      setFakeProfiles(fakeProfiles);
    }
  }, [topArtists]);

  return (
    <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <Navbar />

      <section className="pt-20 text-black mt-20 mx-auto w-full max-w-5xl px-6 text-center">
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
    </main>
  );
}
