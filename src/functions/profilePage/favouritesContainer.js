import React, { useState } from 'react';
import FavouriteItem from './favouriteItem';

const FavouritesContainer = ({ favorites = {}, handleItemClick }) => {
  const [activeTab, setActiveTab] = useState('Movies');

  const getDataByTab = () => {
    switch (activeTab) {
      case 'Movies':
        return favorites.movies || [];
      case 'Series':
        return favorites.series || [];
      case 'Characters':
        return favorites.characters || [];
      case 'Voice Actors':
        return favorites.voiceActors || [];
      default:
        return [];
    }
  };

  const buttonClassName = 'relative pr-4 text-black font-bold cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-white before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-white after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]';

  const renderItems = (items) => {
    if (items.length === 0) {
      return <p className="text-center text-gray-500">No favorites available</p>;
    }

    return items.map(item => {
      if (activeTab === 'Characters') {
        return (
          <FavouriteItem
            key={item.charId}
            imgSrc={item.charImgSrc}
            name={item.charName}
            onClick={() => handleItemClick(item.charName)}
            isClickable={false} 
          />
        );
      }

      if (activeTab === 'Voice Actors') {
        return (
          <FavouriteItem
            key={item.charStaffId}
            imgSrc={item.staffImgSrc}
            name={item.charStaffName}
            onClick={() => handleItemClick(item.charStaffName)}
            isClickable={false} 
          />
        );
      }

      return (
        <FavouriteItem
          key={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          onClick={() => handleItemClick(item.name)}
          isClickable={true} 
        />
      );
    });
  };

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
        {renderItems(getDataByTab())}
      </div>
    </div>
  );
};

export default FavouritesContainer;
