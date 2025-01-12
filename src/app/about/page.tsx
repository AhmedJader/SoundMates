'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const AboutPage = () => {
    const router = useRouter();

    return (
        <main className="w-full antialiased overflow-x-hidden mx-auto relative z-10 min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
            <nav className="bg-black shadow-lg bg-opacity-50 fixed top-0 left-0 w-full z-20">
                <div className="mx-auto flex items-center justify-between p-4">
                    <div className="text-4xl font-bold text-white">SoundMates</div>
                    <nav className="p-2 space-x-6 text-2xl flex items-center">
                        <button
                            className="text-white hover:underline"
                            onClick={() => router.push('/about')}
                        >
                            About
                        </button>
                        <button
                            className="text-white hover:underline"
                            onClick={() => router.push('/features')}
                        >
                            Features
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
                            <strong>Login</strong>
                        </button>
                    </nav>
                </div>
            </nav>

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
                        className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                    >
                        Explore Features
                    </button>
                </div>
            </section>

            <footer className="absolute bottom-4 text-center w-full text-sm text-gray-200">
                © {new Date().getFullYear()} SoundMates. All rights reserved.
            </footer>
        </main>
    );
};

export default AboutPage;
