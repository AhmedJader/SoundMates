"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => router.push('/cohere')}
      >
        Go to Cohere Page
      </button>
    </div>
  );
};

export default Login;
