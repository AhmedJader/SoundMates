'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/navbar';
import UserCard from './UserCard';


const page = () => {
    const router = useRouter();

    const users = [
        {
            name: 'ae86',
            genres: 'Mongolian Throat Singing, Canadian Hip Hop',
            similarity: 85,
            imageUrl: 'https://cdn.discordapp.com/avatars/991430491318276257/a4ada378a542d858e28c20e126d7939d.webp?size=240',
        },
        {
            name: 'helloay',
            genres: 'Pop',
            similarity: 92,
            imageUrl: 'https://cdn.discordapp.com/avatars/774446869433679872/cc2b4de932f0e292257d53e02c77b807.webp?size=240',
        },
        {
            name: 'tintin',
            genres: 'Rock, Indie',
            similarity: 78,
            imageUrl: 'https://cdn.discordapp.com/avatars/516666801070014464/ebf3f11cc2465765d556c006ca196566.webp?size=240',
        },
        {
            name: 'Angela',
            genres: 'Pop, Jazz',
            similarity: 78,
            imageUrl: 'https://cdn.discordapp.com/avatars/749146033539252335/0a011cf6733e25f1642962280fa69a9f.webp?size=240',
        },
    ];

    return (
        <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
            <Navbar/ >

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
