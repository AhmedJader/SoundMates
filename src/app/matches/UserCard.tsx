import React from 'react';
import { useRouter } from 'next/navigation';


interface UserCardProps {
  name: string;
  genres: string;
  similarity: number;
  imageUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, genres, similarity, imageUrl }) => {
    const router = useRouter();
  
    return (
    <div className="bg-white bg-opacity-75 text-black p-6 rounded-lg shadow-2xl hover:shadow-2xl transition">
      <div className="flex items-center space-x-4">
        <img
          src={imageUrl}
          alt="User"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{genres}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${similarity}%` }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">{similarity}% Similar</p>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-pink-500 text-lg text-white py-2 px-4 rounded-md hover:bg-pink-600 shadow-lg">
          <strong>connect 🔗</strong>
        </button>
        <button 
            className="text-lg bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 shadow-lg"
            onClick={() => router.push('../profile')}
        >
          view profile 🔎
        </button>
      </div>
    </div>
  );
};

export default UserCard;
