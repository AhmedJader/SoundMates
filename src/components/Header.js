"use client"
import Head from 'next/head';

export default function Header() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-4 flex items-center justify-center h-32 font-[Arial]">
        <h1 
          className="text-6xl"
          style={{
            animation: 'fadeIn 1s ease-out'
          }}
        >
          Welcome to Guess the Song!
        </h1>
      </header>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
