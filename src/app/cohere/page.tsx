"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar';

const Cohere = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/cohere-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: prompt }),
      });
      const data = await res.json();
      setResponse(data.content);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Cohere Page</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border p-2 mb-2"
          placeholder="Enter your prompt"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
      {response && <div className="mt-4 p-4 border">{response}</div>}
    </div>
  );
};

export default Cohere;