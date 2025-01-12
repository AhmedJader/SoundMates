'use client';

import { useState, useEffect } from 'react';

export default function GuessTheSongPage() {
  const songs = [
    {
      name: 'Gold Rush',
      lyrics: `
        Golden, golden, golden as I open my eyes
        Hold it, focus, hopin' take me back to the light
        I know you were way out of your mind
        And I know that it’s too late to find
        But I’ll be alright now, yeah...`,
    },
    {
      name: 'Shape of You',
      lyrics: `
        The club isn't the best place to find a lover
        So the bar is where I go (mm-mm)
        Me and my friends at the table doing shots
        Drinking fast, and then we talk slow (mm-mm)`,
    },
    {
      name: 'Blinding Lights',
      lyrics: `
        I've been tryna call
        I've been on my own for long enough
        Maybe you can show me how to love, maybe
        I'm going through withdrawals...`,
    },
  ];

  const [selectedSong, setSelectedSong] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  // Function to get a random song
  const getRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setSelectedSong(songs[randomIndex]);
    setIsCorrect(null); // Reset correctness state
    setUserGuess(''); // Clear the input field
  };

  // Handle user input for the song guess
  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  // Handle submit for guess
  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (userGuess.toLowerCase() === selectedSong.name.toLowerCase()) {
      setIsCorrect(true);
      // Immediately show new song after correct guess
      getRandomSong();
    } else {
      setIsCorrect(false);
    }
  };

  // Start a new game when the page loads or after guessing
  useEffect(() => {
    getRandomSong();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-lg">🎶 Guess the Song Game 🎶</h1>

      {selectedSong && (
        <div className="bg-white text-black p-6 rounded-xl shadow-2xl w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700">
            Guess the song from these lyrics:
          </h2>
          <pre className="bg-gray-100 p-4 rounded-lg mb-6 text-lg whitespace-pre-wrap border border-gray-300">
            {selectedSong.lyrics}
          </pre>

          <form onSubmit={handleGuessSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={userGuess}
              onChange={handleGuessChange}
              placeholder="Enter your guess here..."
              className="p-3 border border-gray-300 rounded-lg text-black text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              Submit Guess
            </button>
          </form>

          {isCorrect === true && (
            <p className="text-green-600 font-semibold text-center mt-4">
              Correct! 🎉 You guessed it right.
            </p>
          )}
          {isCorrect === false && (
            <p className="text-red-600 font-semibold text-center mt-4">
              Incorrect! 😞 Try again.
            </p>
          )}
        </div>
      )}

      <button
        onClick={getRandomSong}
        className="mt-6 bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Start a New Game
      </button>
    </div>
  );
}
