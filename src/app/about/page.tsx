'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/navbar';

const AboutPage = () => {
    const router = useRouter();

    return (
        <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
            <Navbar />

            <section className="mt-40 w-full max-w-7xl mx-auto px-6">
                <div className="text-6xl font-bold text-white mb-16 text-center">About SoundMates</div>

                <div className="text-xl text-white mb-12 text-center max-w-3xl mx-auto">
                    <p>
                        Welcome to SoundMates! We're here to connect you with like-minded music lovers
                        and help you discover new tunes based on your personal music preferences. Whether you're
                        into pop, rock, classical, jazz, or anything in between, we’ve got you covered.
                    </p>
                    <p className="mt-6">
                        Our unique algorithm matches you with others who share your tastes, making it easier than ever to find new music and friends.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="w-1/2 h-80 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg animate-pulse">
                        {/* Placeholder for animation or graphic */}
                        <div className="h-full flex justify-center items-center text-3xl text-white font-bold">
                            Animation or Graphic Here
                        </div>
                    </div>
                </div>

                <div className="text-lg text-white max-w-3xl mx-auto">
                    <p>
                        At SoundMates, we believe that music brings people together. We strive to make it easier for you to explore new genres, connect with others,
                        and share your favorite tracks. With features like personalized recommendations, collaborative playlists, and social features, your musical journey
                        is about to get a whole lot more exciting.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => router.push('/features')}
                        className="px-6 py-3 mt-[-20] bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                    >
                        Explore Features
                    </button>
                </div>
            </section>

            <footer className="mt-5 text-center w-full text-sm text-gray-200">
                © {new Date().getFullYear()} SoundMates. All rights reserved.
            </footer>
        </main>
    );
};

export default AboutPage;
