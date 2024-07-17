import React, { useState } from 'react';
import data from '../assets/movieData.json';
import staffData from '../assets/staffData.json';
import newsData from '../assets/newsData.json';
import { useNavigate } from 'react-router-dom';

function SearchResults() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredData = filter === 'Voice Actors' 
  ? staffData
  : filter === 'News'
  ? newsData
  : data.filter(item => filter === 'All' || item.type === filter);

  const combinedData = [...data, ...staffData, ...newsData];

  const handleItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Search Results</div>
      </div>

      <div className='flex'>
        <div className="left w-3/4 pr-4">
          <div className="pageName text-2xl font-bold mb-3">{filter}</div>
          <div className='grid grid-row-10'>
            {/* Display all or filtered data */}
            {(filter === 'All' ? combinedData : filteredData).map(item => (
              <div key={item.id || item.staffId || item.newsId} className="flex p-4 mb-4 rounded-lg border shadow-md cursor-pointer" onClick={() => handleItemClick(item.id)}>
                <img className="w-16 h-24 border-1 shadow-lg" src={item.imgSrc} alt={item.name || item.staffName || item.newsName} />
                <div className="ml-4">
                  <div className="text-xl font-bold">{item.name || item.staffName || item.newsName}</div>
                  <span className="flex mt-2 text-sm">Likes: {item.likes || item.staffFav || item.newsName}</span>
                  <div className="mt-2 text-gray-700 dark:text-gray-300">{item.description || item.staffDesc || item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="left w-1/4 pr-4 pt-12">
          <div className="pl-5">
            <div className='mb-2'><button onClick={() => setFilter('All')}>All</button></div>
            <div className='mb-2'><button onClick={() => setFilter('Movies')}>Movies</button></div>
            <div className='mb-2'><button onClick={() => setFilter('Series')}>Series</button></div>
            <div className='mb-2'><button onClick={() => setFilter('Characters')}>Characters</button></div>
            <div className='mb-2'><button onClick={() => setFilter('Voice Actors')}>Voice Actors</button></div>
            <div className='mb-2'><button onClick={() => setFilter('Lists')}>Lists</button></div>
            <div className='mb-2'><button onClick={() => setFilter('News')}>News</button></div>
            <div className='mb-2'><button onClick={() => setFilter('Users')}>Users</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
