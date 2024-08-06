import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import movieData from '../../assets/movieData.json';
import charData from '../../assets/characterData.json';
import FavouriteItem from './favouriteItem'; 

const FavouritesContainer = ({ favorites = {} }) => {
  const [activeTab, setActiveTab] = useState('Movies');
  const navigate = useNavigate();

  const getDataByTab = useMemo(() => {
    if (!favorites) return [];

    switch (activeTab) {
      case 'Movies':
        return (favorites.movies || []).map(id => movieData.find(m => m.id === id) || { id, imgSrc: 'default-image.png', name: 'Unknown' });
      case 'Series':
        return (favorites.series || []).map(id => movieData.find(s => s.id === id) || { id, imgSrc: 'default-image.png', name: 'Unknown' });
      case 'Characters':
        return (favorites.characters || []).map(id => charData.find(c => c.charId === id) || { charId: id, charImgSrc: 'default-image.png', charName: 'Unknown' });
      case 'Voice Actors':
        return (favorites.voiceActors || []).map(id => charData.find(c => c.charStaffId === id) || { charStaffId: id, staffImgSrc: 'default-image.png', charStaffName: 'Unknown' });
      default:
        return [];
    }
  }, [activeTab, favorites]);

  const handleItemClick = (name) => {
    if (activeTab !== 'Characters' && activeTab !== 'Voice Actors') {
      const encodedName = encodeURIComponent(name);
      navigate(`/detail/${encodedName}`);
    }
  };

  const buttonClassName = 'relative pr-4 text-black font-bold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]';

  return (
    <div className="favorites-container bg-gradient-to-br from-sky-500 to-sky-300 p-6 rounded-lg shadow-lg mt-4 max-w-full mx-auto">
      <div className="tabs flex justify-center mb-6 gap-3 flex-wrap">
        {['Movies', 'Series', 'Characters', 'Voice Actors'].map(tab => (
          <button
            key={tab}
            className={`${buttonClassName} ${activeTab === tab ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="favorites-content max-h-[60vh] overflow-y-auto flex flex-col gap-4">
        {getDataByTab.length > 0 ? getDataByTab.map(item => (
          <FavouriteItem
            key={item.id || item.charId || item.charStaffId}
            imgSrc={activeTab === 'Voice Actors' ? item.staffImgSrc : (activeTab === 'Characters' ? item.charImgSrc : item.imgSrc)}
            name={activeTab === 'Voice Actors' ? item.charStaffName : (item.name || item.charName)}
            onClick={() => handleItemClick(activeTab === 'Voice Actors' ? item.charStaffName : (item.name || item.charName))}
            isClickable={activeTab !== 'Characters' && activeTab !== 'Voice Actors'}
          />
        )) : (
          <p className="text-center text-gray-500">No favorites available</p>
        )}
      </div>
    </div>
  );
};

export default FavouritesContainer;
