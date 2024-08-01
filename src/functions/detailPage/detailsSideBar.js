import Buttons from './buttons.js';
import BarChart from './chart.js';
import React from 'react';

const DetailsSidebar = ({ item }) => (
  <div className="flex flex-col items-center pt-4 h-full">
    {/* Add List, Fav, Rating Buttons */}
    <div className="flex mb-4">
      <Buttons />
    </div>

    {/* Details */}
    <div className="border border-black rounded w-52 h-56 -mt-2 bg-white">
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
