'use client';
import React, { useEffect, useState } from 'react';
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
  images: Array<{ url: string }>;
  id: string;
}

interface Track {
  name: string;
  images: Array<{ url: string }>;
  id: string;
}

export default function ProfileStats() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [topArtist, setTopArtist] = useState<Artist | null>(null);
  const [topTrack, setTopTrack] = useState<Track | null>(null);

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
        .then((data) => {
          setProfile(data); // Set profile data
        })
        .catch((error) => console.error('Error fetching profile:', error));

      // Fetch top artist data
      fetch('https://api.spotify.com/v1/me/top/artists?limit=1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const artist = data.items[0]; // Assuming the response is an array of artists
          setTopArtist({
            name: artist.name,
            images: artist.images,
            id: artist.id,
          });
        })
        .catch((error) => console.error('Error fetching top artist:', error));

      // Fetch top track data
      fetch('https://api.spotify.com/v1/me/top/tracks?limit=1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const track = data.items[0]; // Assuming the response is an array of tracks
          setTopTrack({
            name: track.name,
            images: track.images,
            id: track.id,
          });
        })
        .catch((error) => console.error('Error fetching top track:', error));
    } else {
      console.error('No access token found');
    }
  }, []);

  const dummyData = {
    name: "John Smith",
    avatar: "https://via.placeholder.com/120", // Placeholder icon
    spotifyProfile: "https://open.spotify.com/user/spotify_user_id", 
    bio: "Music Enthusiast & Sound Explorer",
    stats: [
      { title: "total playtime ⏳ ", value: "245 hours" },
      { title: "favourite genre 🎸", value: "Indie Rock" },
      { title: "top artist 🌟", value: "Tame Impala" },
      { title: "total playlists 📂", value: "18" },
      { title: "most played song 🎶", value: "The Less I Know The Better" },
      { title: "friends connected 🤝", value: "42" }, // Default dummy value for friends connected
    ],
  };

  return (
    <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Profile Section */}
      <section className="pt-20 text-black mt-20 mx-auto w-full max-w-5xl px-6 text-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <img
            src={profile ? profile.images[0]?.url : dummyData.avatar}
            alt={`${profile ? profile.display_name : dummyData.name}'s Avatar`}
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">{profile ? profile.display_name : dummyData.name}</h1>
          <p className="text-lg text-purple-600">{profile ? profile.email : dummyData.bio}</p>
          <a
            href={profile ? `https://open.spotify.com/user/${profile.id}` : dummyData.spotifyProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-green-500 hover:text-green-600"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" // Spotify logo URL
              alt="Spotify Logo"
              className="w-6 h-6 mr-2"
            />
            <span className="font-semibold text-lg">View Spotify Profile</span>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-12 mb-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyData.stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white text-black bg-opacity-60 p-6 rounded-lg shadow-2xl flex flex-col items-center"
          >
            <h3 className="text-lg font-bold text-pink-600 mb-6">{stat.title}</h3>
            <p className="text-2xl font-bold">
              {stat.title === "friends connected 🤝"
                ? profile ? profile.followers.total.toString() : stat.value // Use profile.followers.total if available
                : stat.title === "top artist 🌟"
                ? topArtist ? topArtist.name : stat.value // Display top artist name if available
                : stat.title === "most played song 🎶"
                ? topTrack ? `${topTrack.name} by ${topArtist?.name}` : stat.value // Display top track with artist name
                : stat.value}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center w-full text-sm text-gray-200">
        © {new Date().getFullYear()} SoundMates. All rights reserved.
      </footer>
    </main>
  );
}
