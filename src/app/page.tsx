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

export default function Home() {
  const router = useRouter();

  return (
    <main className="antialiased wfull overflow-x-hidden mx-auto relative z-10 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Connect with People Who Share Your Musical Taste
        </h1>
        <p className="text-lg mb-8 max-w-md mx-auto">
          Discover and connect with people who have similar Spotify music profiles. Share your favorite tracks and meet new friends!
        </p>
        
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          onClick={() => router.push('/login')}
        >
          Login with Spotify
        </button>
      </div>

      <footer className="absolute bottom-4 text-center w-full text-sm text-gray-200">
        <p>© 2025 YourAppName. All rights reserved.</p>
      </footer>
    </main>
  );
}

