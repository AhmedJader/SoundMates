'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => router.push('/login')}
      >
        Go to Login Page
      </button>
    </main>
  );
}
