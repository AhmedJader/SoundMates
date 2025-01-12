import React from 'react';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter(); // Initialize the router

  return (
    <nav className="bg-black shadow-lg bg-opacity-50 absolute top-0 left-0 w-full z-20">
      <div className="mx-auto flex items-center justify-between p-4">
        <div className="text-4xl font-bold text-white"><button
            className="text-white"
            onClick={() => router.push('/')} // Use the router object
          >
            SoundMates
          </button></div>
        <nav className="p-2 space-x-6 text-2xl flex items-center">
          <button
            className="text-white hover:underline"
            onClick={() => router.push('/about')} // Use the router object
          >
            about
          </button>
          <button
            className="text-white hover:underline"
            onClick={() => router.push('/matches')}
          >
            meet soundmates
          </button>
          <button
            className="text-white hover:underline"
            onClick={() => router.push('/game')}
          >
            game
          </button>
          <button
            className="text-white hover:underline"
            onClick={() => router.push('/profile')}
          >
            my profile
          </button>
          
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
