import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../assets/movieData.json';
import staffData from '../assets/staffData.json';

function Animation() {
  const [filter, setFilter] = useState('Movies');
  const navigate = useNavigate();

  const filteredData = filter === 'Voice Actors'
    ? staffData
    : filter === 'Movies'
    ? data.filter(item => item.type === 'Movies')
    : data.filter(item => item.type === 'Series');

  const handleItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Most Populars</div>

        {/* Filtering */}
        <div className="relative w-full flex justify-center font-bold z-0 mb-2">
          <div className="navBut mx-2 mt-2"><button onClick={() => setFilter('Movies')}>Movies</button></div>
          <div className="navBut mx-2 mt-2"><button onClick={() => setFilter('Series')}>Series</button></div>
          <div className="navBut mx-2 mt-2"><button onClick={() => setFilter('Voice Actors')}>Voice Actors</button></div>
        </div>
      </div>

      <div className=''>
        <div className="pageName text-2xl font-bold mb-3">{filter}</div>
        <div className='grid grid-row-10'>
          {filteredData.map(item => (
            <div 
              key={item.id || item.staffId} 
              className="flex p-4 rounded-lg border mb-3 shadow-md cursor-pointer"
              onClick={() => handleItemClick(item.id)}
            >
              <img className="w-16 h-24 border-1 shadow-lg" src={item.imgSrc} alt={item.name || item.staffName} />
              <div className="ml-4">
                <div className="text-xl font-bold">{item.name || item.staffName}</div>
                <span className="flex mt-2 text-sm">Likes: {item.likes || item.staffFav}</span>
                <div className="mt-2 text-gray-500">{item.description || item.staffDesc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;
