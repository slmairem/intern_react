import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../assets/movieData.json';
import staffData from '../assets/staffData.json';
import charData from '../assets/characterData.json';

function Animation() {
  const [filter, setFilter] = useState('Movies');
  const navigate = useNavigate();

  let filteredData = [];
  if (filter === 'Voice Actors') {
    filteredData = staffData.map(item => ({
      id: item.staffId,
      name: item.staffName,
      imgSrc: item.staffImgSrc,
      likes: item.staffFav,
      description: item.staffDesc,
    }));
  } else if (filter === 'Movies') {
    filteredData = data.filter(item => item.type === 'Movies');
  } else if (filter === 'Series') {
    filteredData = data.filter(item => item.type === 'Series');
  } else if (filter === 'Characters') {
    filteredData = charData.map(item => ({
      id: item.charId,
      name: item.charName,
      imgSrc: item.imgSrc,
      likes: item.charFav,
      description: item.charDesc,
    }));
  }

  filteredData.sort((a, b) => b.likes - a.likes);

  const handleItemClick = (name) => {
    const encodedName = encodeURIComponent(name);
    navigate(`/detail/${encodedName}`);
  };

  const buttonClassName = 'relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]';

  return (
    <div className='container mx-auto p-4 font-IndieFlower'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Most Popular</div>

        {/* Filtering */}
        <div className="relative w-full flex justify-center font-bold text-xl z-0 mb-2">
          <div className="navBut mx-2 mt-2">
            <button className={buttonClassName} onClick={() => setFilter('Movies')}>Movies</button>
          </div>
          <div className="navBut mx-2 mt-2">
            <button className={buttonClassName} onClick={() => setFilter('Series')}>Series</button>
          </div>
          <div className="navBut mx-2 mt-2">
            <button className={buttonClassName} onClick={() => setFilter('Characters')}>Characters</button>
          </div>
          <div className="navBut mx-2 mt-2">
            <button className={buttonClassName} onClick={() => setFilter('Voice Actors')}>Voice Actors</button>
          </div>
        </div>
      </div>

      <div>
        <div className="pageName text-2xl font-bold mb-3">{filter}</div>
        <div className='grid grid-row-10'>
          {filteredData.map(item => (
            <div 
              key={item.id} 
              className="flex p-4 rounded-lg border mb-3 shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => handleItemClick(item.name)}
            >
              <img 
                className="w-16 h-20 border-1 shadow-lg" 
                src={item.imgSrc} 
                alt={item.name} 
              />
              <div className="ml-4">
                <div className="text-xl font-bold">{item.name}</div>
                <span className="flex mt-2 text-sm">Likes: {item.likes}</span>
                <div className="mt-2 text-gray-500">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;
