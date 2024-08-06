import React from 'react';
import Placeholder from './placeholder'; 

const ImageGrid = ({ images, listName, username, likes, comments }) => {
  const placeholderCount = Math.max(0, 4 - images.length);
  return (
    <div className='p-4 rounded-lg border shadow-md hover:shadow-lg mb-4 mr-4 cursor-pointer'>
      <div className="flex -space-x-4">
        {images.map((src, index) => (
          <img key={index} className="w-24 h-32 border-1 shadow-lg" src={src} alt="" />
        ))}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <Placeholder key={index} size="w-24 h-32" />
        ))}
      </div>
      <div className="mt-2 text-xl font-bold text-gray-900">{listName}</div>
      <div className="flex items-center justify-between mt-1 text-gray-400">
        <span className="text-sm">{username}</span>
        <div className="flex space-x-4">
          <span className="text-sm">Likes: {likes}</span>
          <span className="text-sm">Comments: {comments}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
