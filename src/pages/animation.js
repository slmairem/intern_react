import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../assets/movieData.json';
import charData from '../assets/characterData.json';
import FilterButton from '../functions/animationPage/filterButton.js';
import ItemCard from '../functions/animationPage/itemCard.js';

const ITEMS_PER_PAGE = 10;

function Animation() {
  const [filter, setFilter] = useState('Movies');
  const [currentPage, setCurrentPage] = useState(1);
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

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleItemClick = (item) => {
    if (filter !== 'Characters' && filter !== 'Voice Actors') {
      const encodedName = encodeURIComponent(item.name);
      navigate(`/detail/${encodedName}`);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div className='container mx-auto p-4 font-IndieFlower'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Most Popular</div>

        {/* Filtering */}
        <div className="relative w-full flex justify-center font-bold text-xl z-0 mb-2">
          <FilterButton 
            label="Movies" 
            onClick={() => setFilter('Movies')} 
            isActive={filter === 'Movies'} 
          />
          <FilterButton 
            label="Series" 
            onClick={() => setFilter('Series')} 
            isActive={filter === 'Series'} 
          />
          <FilterButton 
            label="Characters" 
            onClick={() => setFilter('Characters')} 
            isActive={filter === 'Characters'} 
          />
          <FilterButton 
            label="Voice Actors" 
            onClick={() => setFilter('Voice Actors')} 
            isActive={filter === 'Voice Actors'} 
          />
        </div>
      </div>

      <div>
        <div className="pageName text-2xl font-bold mb-3">{filter}</div>
        <div className='relative'>
          <div className='grid grid-cols-1 gap-4'>
            {paginatedData.map((item, index) => (
              <div className="item-container relative" key={item.id}>
                <div className="item-number absolute left-0 top-1/2 transform -translate-y-1/2 text-xl font-bold text-gray-600">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</div>
                <div className="content pl-12">
                  <ItemCard 
                    item={item}
                    onClick={handleItemClick}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 ${currentPage === 1 ? 'hidden' : ''}`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${currentPage === totalPages ? 'hidden' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animation;
