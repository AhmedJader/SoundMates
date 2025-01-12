'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/navbar';
import Navbar2 from '../components/navbar2';

require('dotenv').config();

const id = process.env.NEXT_PUBLIC_CLIENT_ID;

const authorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${id}&scope=user-read-private user-top-read&redirect_uri=${encodeURIComponent('http://localhost:3001/login')}`;

const AboutPage = () => {
    const router = useRouter();

    return (
        <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
            {authorizeUrl ? <Navbar /> : <Navbar2 />}

            <section className="mt-40 w-full max-w-7xl mx-auto px-6">
                <div className="mt-10 text-6xl font-bold text-white mb-16 text-center">
                    About <span className="text-blue-200">SoundMates</span>
                </div>
                
                <div className="text-xl text-white mb-12 text-center max-w-3xl mx-auto">
                    <p>
                        Welcome to SoundMates! We're here to connect you with like-minded music lovers. Whether you're
                        into pop, rock, classical, jazz, or anything in between, there's a soundmate out there for you.
                    </p>
                    <p className="mt-6">
                        Our unique algorithm matches you with others who share your musical tastes, making it easier than ever to find friends that you really click with.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => router.push('/profile')}
                        className="px-6 py-3 mt-[-20] bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                    >
                        Explore Profile
                    </button>
                </div>
            </section>

            <footer className="mb-15 text-center w-full text-sm text-gray-200">
                © {new Date().getFullYear()} SoundMates. All rights reserved.
            </footer>
        </main>
    );
};

export default AboutPage;
