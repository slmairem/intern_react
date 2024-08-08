import React from 'react';
import Placeholder from './placeholder'; 

const ImageGrid = ({ images, listName, username, likes, comments }) => {
  const placeholderCount = Math.max(0, 4 - images.length);

  return (
    <div className='p-4 rounded-lg border shadow-md hover:shadow-lg mb-4 mr-4 cursor-pointer max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
      <div className="flex flex-wrap -space-x-4  -m-1 overflow-hidden">
        {images.map((src, index) => (
          <div key={index} className="w-1/4 p-1">
            <img className="w-full h-32 object-cover rounded-md" src={src} alt="" />
          </div>
        ))}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <div key={index} className="w-1/4 p-1">
            <Placeholder size="w-full h-32" />
          </div>
        ))}
      </div>
      <div className="mt-2 text-lg font-bold text-gray-900 truncate">{listName}</div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-1 text-gray-400 text-sm">
        <span className="truncate">{username}</span>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <span>Likes: {likes}</span>
          <span>Comments: {comments}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
