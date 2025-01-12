'use client';
import React, { createContext, useState, useEffect } from 'react';

export const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('spotifyAccessToken');
    if (token) {
      setAccessToken(token);
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching user profile: ${response.statusText}`);
      }

      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SpotifyContext.Provider value={{ accessToken, userProfile }}>
      {children}
    </SpotifyContext.Provider>
  );
};
