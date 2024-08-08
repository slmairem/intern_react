import React from 'react';
import { Link } from 'react-router-dom';

const PopularListsSection = ({ popularLists, getMovieImages }) => (
  <div className="mb-5 ml-5">
    <h3 className="text-xl font-semibold font-IndieFlower">Popular Lists</h3>
    {popularLists.map((list) => {
      const images = getMovieImages(list.movies);
      const placeholderCount = 4 - images.length;

      return (
        <div key={list.listId} className="flex flex-col items-start p-4 rounded-lg border shadow-md mb-2 cursor-pointer hover:shadow-lg">
          <div className="flex flex-shrink-0 -space-x-4 mb-4 overflow-hidden">
            {images.map((src, index) => (
              <img key={index} className="w-16 h-24 border-1 shadow-lg object-cover" src={src} alt="" />
            ))}
            {Array.from({ length: placeholderCount }).map((_, index) => (
              <Placeholder key={index} size="w-16 h-24" />
            ))}
          </div>
          <div className="w-full overflow-hidden">
            <div className="text-xl font-bold truncate">{list.listName}</div>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <span className="text-sm truncate">{list.publishUser}</span>
              <span className="ml-2 text-sm truncate">Likes: {list.likes}</span>
            </div>
          </div>
        </div>
      );
    })}
    <div className="ml-4 text-right mb-2">
      <Link to="/lists" className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900">View More...</Link>
    </div>
  </div>
);

const Placeholder = ({ size }) => (
  <div className={`${size} bg-gray-300 border border-gray-400 shadow-lg`}></div>
);

export default PopularListsSection;
