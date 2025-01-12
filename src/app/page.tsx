'use client';
import React from 'react';
import { useRouter } from 'next/navigation';


const fetchToken = async () => {
  try {
    const response = await fetch('/api/spotify-gettoken');
    if (!response.ok) {
      throw new Error(`Error fetching token: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Spotify Access Token:', data.access_token);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      {/* Transparent Header */}
      <nav className="bg-black shadow-lg bg-opacity-50 absolute top-0 left-0 w-full z-20">
        <div className="mx-auto flex items-center justify-between p-4">
          <div className="text-4xl font-bold text-white">SoundMates</div>
          <nav className="p-2 space-x-6 text-2xl flex items-center">
            <button
              className="text-white hover:underline"
              onClick={() => router.push('/about')}
            >
              about
            </button>
            <button
              className="text-white hover:underline"
              onClick={() => router.push('/features')}
            >
              features
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center"
              onClick={() => router.push('/login')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 168 168"
                className="w-6 h-6 mr-4"
              >
                <path
                  fill="#fff"
                  d="M84 0a84 84 0 1 0 0 168 84 84 0 0 0 0-168zm38.4 121.4c-2 3-5.6 4-8.6 2.2-23.6-14.4-53.4-17.6-88-9.4-3.4.8-7-1.2-7.8-4.8-1-3.6 1.2-7 4.8-7.8 36.8-8.8 69.8-5.2 96.8 10.4 3 1.8 3.8 5.8 2.8 9zm12-22c-2.6 4-7.8 5.4-11.6 3-27.2-17-68.4-22.2-100.6-11.6-4.4 1.4-9.4-.8-11.2-5-1.6-4.4.8-9.4 5-11.2 36-11.6 81.4-5.8 113 13.4 4.2 2.4 5.6 7.8 3.4 12.2zm.6-22.4c-32-19.2-92.2-21.2-124-11.6-5.2 1.8-10.6-1.2-12.4-6.4-1.6-5.2 1.2-10.6 6.4-12.4 35.8-10.6 101.8-8.2 138.8 13 4.6 2.8 6 8.8 3.4 13.4-2.6 4.4-8.6 6-13.2 3.4z"
                />
              </svg>
              <strong>login</strong>
            </button>
          </nav>
        </div>
      </nav>

      <div className="text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-8xl font-bold mb-10">
          SoundMates
        </h1>
        <p className="text-2xl max-w-2xl mx-auto mb-16">
          Discover and connect with people who have similar music tastes. Share your favorite tracks and meet new friends! 🎵🌟
        </p>

        <button
          className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 text-2xl font-semibold transition duration-300 flex items-center mx-auto"
          onClick={() => router.push('/login')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 168 168"
            className="w-12 h-12 mr-4"
          >
            <path
              fill="#fff"
              d="M84 0a84 84 0 1 0 0 168 84 84 0 0 0 0-168zm38.4 121.4c-2 3-5.6 4-8.6 2.2-23.6-14.4-53.4-17.6-88-9.4-3.4.8-7-1.2-7.8-4.8-1-3.6 1.2-7 4.8-7.8 36.8-8.8 69.8-5.2 96.8 10.4 3 1.8 3.8 5.8 2.8 9zm12-22c-2.6 4-7.8 5.4-11.6 3-27.2-17-68.4-22.2-100.6-11.6-4.4 1.4-9.4-.8-11.2-5-1.6-4.4.8-9.4 5-11.2 36-11.6 81.4-5.8 113 13.4 4.2 2.4 5.6 7.8 3.4 12.2zm.6-22.4c-32-19.2-92.2-21.2-124-11.6-5.2 1.8-10.6-1.2-12.4-6.4-1.6-5.2 1.2-10.6 6.4-12.4 35.8-10.6 101.8-8.2 138.8 13 4.6 2.8 6 8.8 3.4 13.4-2.6 4.4-8.6 6-13.2 3.4z"
            />
          </svg>
          login with spotify
        </button>

      </div>

      <footer className="absolute bottom-4 text-center w-full text-sm text-gray-200">
        © {new Date().getFullYear()} SoundMates. All rights reserved.
      </footer>
    </main>
  );
}

