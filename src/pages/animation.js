import React, { useState } from 'react';
import data from '../assets/movieData.json';

function Animation(){
  // Filtering
  const [filter, setFilter] = useState('All');

  const filteredData = data.filter(item => filter === 'All' || item.type === filter);

  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Most Populars</div>

        {/* Filtering */}
        <div className="relative w-full flex justify-center  font-bold z-0 mb-2">
          <div className="navBut mx-2 mt-2"><button onClick={() => setFilter('Movies')}>Movies</button></div>
          <div className="navBut mx-2 mt-2"><button onClick={() => setFilter('Series')}>Series</button></div>
          <div className="navBut mx-2 mt-2"><button onClick={() => setFilter('Voice Actors')}>Voice Actors</button></div>
        </div>
      </div>

      <div className=''>
        <div className="pageName text-2xl font-bold mb-3">{filter}</div>
        <div className='grid grid-row-10'>
          {filteredData.map(item => (
            <div key={item.id} className="flex p-4 rounded-lg border mb-3 shadow-md">
              <img className="w-16 h-24 border-1 shadow-lg" src={item.imgSrc} alt={item.name} />
              <div className="ml-4">
                <div className="text-xl font-bold">{item.name}</div>
                <span className="flex mt-2 text-sm">Likes: {item.likes}</span>
                <div className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Animation;