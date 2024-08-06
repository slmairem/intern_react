import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../assets/movieData.json';
import charData from '../assets/characterData.json';
import FilterButton from '../functions/animationPage/filterButton.js';
import ItemCard from '../functions/animationPage/itemCard.js';

function Animation() {
  const [filter, setFilter] = useState('Movies');
  const navigate = useNavigate();

  let filteredData = [];
  if (filter === 'Voice Actors') {
    filteredData = charData.map(item => ({
      id: item.charStaffId,
      name: item.charStaffName,
      imgSrc: item.staffImgSrc,
      likes: item.charFav,
      description: item.charDesc,
    }));
  } else if (filter === 'Movies') {
    filteredData = data.filter(item => item.type === 'Movies');
  } else if (filter === 'Series') {
    filteredData = data.filter(item => item.type === 'Series');
  } else if (filter === 'Characters') {
    filteredData = charData.map(item => ({
      id: item.charId,
      name: item.charName,
      imgSrc: item.charImgSrc,
      likes: item.charFav,
      description: item.charDesc,
    }));
  }

  filteredData.sort((a, b) => b.likes - a.likes);

  const handleItemClick = (item) => {
    if (filter !== 'Characters' && filter !== 'Voice Actors') {
      const encodedName = encodeURIComponent(item.name);
      navigate(`/detail/${encodedName}`);
    }
  };
  

  return (
    <div className='container mx-auto p-4 font-IndieFlower'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Most Popular</div>

        {/* Filtering */}
        <div className="relative w-full flex justify-center font-bold text-xl z-0 mb-2">
          <FilterButton label="Movies" onClick={() => setFilter('Movies')} />
          <FilterButton label="Series" onClick={() => setFilter('Series')} />
          <FilterButton label="Characters" onClick={() => setFilter('Characters')} />
          <FilterButton label="Voice Actors" onClick={() => setFilter('Voice Actors')} />
        </div>
      </div>

      <div>
        <div className="pageName text-2xl font-bold mb-3">{filter}</div>
        <div className='grid grid-row-10'>
          {filteredData.map(item => (
            <ItemCard 
              key={item.id}
              item={item}
              onClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;
