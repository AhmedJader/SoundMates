'use client';
import { useRouter } from 'next/navigation';  // Importing useRouter from next/navigation
import { FaGamepad } from 'react-icons/fa';  // Importing the gamepad icon

export default function HeroSection() {
    const router = useRouter();  // Initialize the router correctly
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-3xl text-center">
        <h2 className="text-5xl font-extrabold mb-6">Think you know your music?</h2>
        <p className="text-xl mb-8">
          Test your knowledge and see if you can guess the song in record time! Play with your friends and see who knows more!
        </p>

        <div className="flex flex-col gap-4">
          {/* Play Now Icon with Text inside a round button */}
          <div
            className="bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer"
            onClick={() => 
                router.push('/game/playgame')  // Navigate to the /game page
            }
          >
            <FaGamepad className="text-3xl mr-2" />  {/* Gamepad icon */}
            Play Now
          </div>
        </div>
      </div>
    </section>
  );
}
