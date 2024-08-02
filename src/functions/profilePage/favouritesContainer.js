import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import movieData from '../../assets/movieData.json';
import charData from '../../assets/characterData.json';
import staffData from '../../assets/staffData.json';

const FavoriteItem = ({ imgSrc, name, onClick }) => (
  <div
    className="flex items-center p-4 bg-gradient-to-br from-slate-50 to-slate-200 rounded-lg mb-2 cursor-pointer hover:shadow-md"
    onClick={onClick}
  >
    <img src={imgSrc || 'default-image.png'} alt={name} className="w-12 h-16 object-cover rounded mr-4" />
    <p className="text-lg font-semibold mt-3 truncate">{name}</p>
  </div>
);

const FavoritesContainer = ({ favorites = {} }) => {
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
        return (favorites.characters || []).map(id => charData.find(c => c.charId === id) || { charId: id, imgSrc: 'default-image.png', charName: 'Unknown' });
      case 'Voice Actors':
        return (favorites.voiceActors || []).map(id => staffData.find(s => s.staffId === id) || { staffId: id, staffImgSrc: 'default-image.png', staffName: 'Unknown' });
      default:
        return [];
    }
  }, [activeTab, favorites]);

  const handleItemClick = (name) => {
    const encodedName = encodeURIComponent(name);
    navigate(`/detail/${encodedName}`);
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
          <FavoriteItem
            key={item.id || item.charId || item.staffId}
            imgSrc={item.imgSrc || item.staffImgSrc}
            name={item.name || item.charName || item.staffName}
            onClick={() => handleItemClick(item.name || item.charName || item.staffName)}
          />
        )) : (
          <p className="text-center text-gray-500">No favorites available</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesContainer;
