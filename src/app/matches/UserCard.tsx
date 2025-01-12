import React from 'react';

interface UserCardProps {
  name: string;
  genres: string;
  similarity: number;
  imageUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, genres, similarity, imageUrl }) => {
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
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Connect
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
