'use client';
import React, { useEffect, useState } from 'react';

interface Profile {
  display_name: string;
  email: string;
  id: string;
  images: Array<{ url: string }>;
  product: string;
  // You can add other fields if necessary
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('spotify_access_token');
    if (token) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Profile Data:', data); // Log the entire response
          setProfile(data); // Set the profile state with the fetched data
        })
        .catch((error) => console.error('Error fetching profile:', error));
    } else {
      console.error('No access token found');
    }
  }, []);

  return (
    <main className="h-screen flex items-center justify-center bg-gray-100">
      {profile ? (
        <div>
          <h1 className="text-2xl">Welcome, {profile.display_name || 'Unknown'}!</h1>
          <p>{profile.email || 'No email available'}</p>
        </div>
      ) : (
        <h1 className="text-xl">Loading profile...</h1>
      )}
    </main>
  );
}
