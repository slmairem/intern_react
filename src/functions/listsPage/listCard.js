import React from 'react';
import Placeholder from './placeholder'; 

const ListCard = ({ images, listName, username, description, likes }) => {
  const placeholderCount = Math.max(0, 4 - images.length);
  return (
    <div className="flex items-start p-4 rounded-lg border shadow-md hover:shadow-lg cursor-pointer">
      <div className="flex-shrink-0 flex -space-x-4">
        {images.map((src, index) => (
          <img key={index} className="w-16 h-24 border-1 shadow-lg" src={src} alt="" />
        ))}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <Placeholder key={index} size="w-16 h-24" />
        ))}
      </div>
      <div className="ml-4">
        <div className="text-xl font-bold">{listName}</div>
        <div className="flex items-center mt-2 text-gray-500">
          <span className="text-sm">{username}</span>
          <span className="ml-2 text-sm">Likes: {likes}</span>
        </div>
        <div className="mt-2 text-gray-400">{description}</div>
      </div>
    </div>
  );
};

export default ListCard;
