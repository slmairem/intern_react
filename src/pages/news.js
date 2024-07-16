import React, { useState } from 'react';
import data from '../assets/newsData.json';

function News() {
  // Filtering
  const [filter, setFilter] = useState('All');

  const filteredData = data.filter(item => filter === 'All' || item.tags.includes(filter));

  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">News</div>
      </div>

      <div className='flex'>
        <div className="relative w-full flex justify-center font-bold z-0 mb-2">
          <div className="navBut mx-2 mt-2">
            <button onClick={() => setFilter('All')}>All</button>
          </div>
          <div className="navBut mx-2 mt-2">
            <button onClick={() => setFilter('Series')}>Series</button>
          </div>
          <div className="navBut mx-2 mt-2">
            <button onClick={() => setFilter('Movies')}>Movies</button>
          </div>
          <div className="navBut mx-2 mt-2">
            <button onClick={() => setFilter('Voice Actors')}>Voice Actors</button>
          </div>
          <div className="navBut mx-2 mt-2">
            <button onClick={() => setFilter('Events')}>Events</button>
          </div>
        </div>

        <div className="bg-white rounded mx-2 mt-2 justify-end">
          <input type="text" placeholder="Search..." className="border text-black border-gray-300 rounded pl-2" />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {filteredData.map((item) => (
          <div key={item.newsId} className="flex bg-white p-4 rounded shadow-md">
            <div className="w-1/4">
              <img src={item.imgSrc} alt="News Image" className="w-full h-auto rounded" />
            </div>
            <div className="w-3/4 pl-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold truncate">{item.newsName}</h2>
                <p className="text-gray-700 mt-2 line-clamp-3">{item.content}</p>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                <p>{item.publishDate} by {item.publisherName}</p>
                <div className="mt-2">
                  {item.tags.map((tag, index) => (
                    <button key={index} className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
