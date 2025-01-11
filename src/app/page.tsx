// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const router = useRouter();

//   return (
//     <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 h-screen flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
//       <button
//         className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         onClick={() => router.push('/login')}
//       >
//         Login with Spotify
//       </button>
//     </main>
//   );
// }

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
      <nav className="bg-black bg-opacity-50 absolute top-0 left-0 w-full z-20">
        <div className="mx-auto flex items-center justify-between p-4">
          <div className="text-4xl font-bold text-white">SoundMates</div>
          <nav className="p-2 space-x-6 text-2xl">
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
              className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              onClick={() => router.push('/login')}
            >
              login
            </button>
          </nav>
        </div>
      </nav>

      <div className="text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-8xl font-bold mb-10">
          SoundMates
        </h1>
        <p className="text-lg mb-8 max-w-md mx-auto">
          Discover and connect with people who have similar Spotify music profiles. Share your favorite tracks and meet new friends!
        </p>

        <button
          className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          onClick={() => {
            fetchToken();
            router.push('/login'); 
          }}
        >
          login with spotify
        </button>

      </div>

      <footer className="absolute bottom-4 text-center w-full text-sm text-gray-200">
        © {new Date().getFullYear()} SoundMates. All rights reserved.
      </footer>
    </main>
  );
}

