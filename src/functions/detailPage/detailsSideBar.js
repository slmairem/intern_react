import { FaHeart } from 'react-icons/fa';
import Dropdown from './dropdown.js';
import BarChart from './chart.js';
import Rating from './rating.js';
import React from 'react';

const DetailsSidebar = ({ item }) => (
  <div className="flex flex-col items-center pt-4 h-full">
    {/* Add List, Fav, Rating Buttons */}
    <div className="flex">
      <Dropdown />
      <button
        className="ml-2 relative inline-flex items-center justify-center w-10 h-10 bg-red-900 text-white rounded-lg text-xs shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-950"
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <FaHeart aria-hidden="true" />
        </span>
      </button>
    </div>

    <div className="mt-4">
      <Rating />
    </div>

    {/* Details */}
    <div className="border border-black rounded w-52 h-56 -mt-4 bg-white">
      <div className="details p-3">
        <div>
          <span className="inline-block font-bold">Year:</span> <span className="inline-block">{item.year}</span> <br/>
          <span className="inline-block font-bold">Genres:</span> <span className="inline-block">{item.genres}</span> <br/>
          {item.type === 'Series' && (
            <>
              <span className="inline-block font-bold">Episodes:</span> <span className="inline-block">{item.episodes}</span> <br/>
            </>
          )}
          <span className="inline-block font-bold">Duration:</span> <span className="inline-block">{item.duration}</span> <br/>
          <span className="inline-block font-bold">Likes:</span> <span className="inline-block">{item.likes}</span> 
        </div>
      </div>
    </div>

    <div className="border border-black rounded w-52 h-52 mt-2 mb-2 bg-white overflow-hidden">
      <div className="details p-4 h-full flex flex-col items-center">
        <div className="text-lg font-semibold mb-2">Average Rating</div>
        <div className="flex-grow overflow-auto">
          <BarChart />
        </div>
      </div>
    </div>
  </div>
);

export default DetailsSidebar;
