'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import UserCard from './UserCard';


const page = () => {
    const router = useRouter();

    const users = [
        {
            name: 'John Doe',
            genres: 'Pop, Indie Rock',
            similarity: 85,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Jane Smith',
            genres: 'Jazz, Classical',
            similarity: 92,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Another Person',
            genres: 'Country, Classical',
            similarity: 78,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            name: 'Another Person',
            genres: 'Country, Classical',
            similarity: 78,
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
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
            onClick={() => router.push('/game')}
          >
            game
          </button>
          
        </nav>
      </div>
    </nav>

            <section className="mt-40 w-full max-w-7xl mx-auto px-6">
                <div className="text-6xl font-bold text-white mb-16">Meet your SoundMates ✨</div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <button className="text-white p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                            Genre: All
                        </button>
                        <button className="text-white p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                            Sort by Similarity
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Search by name or artist"
                        className="p-2 rounded-md bg-gray-800 text-white border-none"
                    />
                </div>
            </section>

            <section className="mt-12 mb-14 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {users.map((user, index) => (
                    <UserCard
                        key={index}
                        name={user.name}
                        genres={user.genres}
                        similarity={user.similarity}
                        imageUrl={user.imageUrl}
                    />
                ))}
            </section>

            <footer className="absolute bottom-4 text-center w-full text-sm text-gray-200">
                © {new Date().getFullYear()} SoundMates. All rights reserved.
            </footer>
        </main>
    );
};

export default page;
