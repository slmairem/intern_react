import React, { useState } from 'react';
import data from '../assets/newsData.json';

function News() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredData = data
    .filter(item => filter === 'All' || item.tags.includes(filter))
    .filter(item => item.newsName.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTagClick = (tag) => {
    setFilter(tag);
    setCurrentPage(1); 
  };

  return (
    <div className='container mx-auto p-4 font-IndieFlower'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">News</div>
      </div>

      <div className='flex'>
        <div className="relative w-full flex justify-center font-bold z-0 mb-2">
          <div className={`mx-2 mt-2 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 ${filter === 'All' ? 'before:w-[50%] before:bottom-0 before:left-[50%]' : 'hover:before:w-[50%] before:bottom-0 before:left-[50%]'} after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 ${filter === 'All' ? 'after:w-[50%] after:bottom-0 after:right-[50%]' : 'hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}>
            <button onClick={() => setFilter('All')}>All</button>
          </div>
          <div className={`mx-2 mt-2 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 ${filter === 'Series' ? 'before:w-[50%] before:bottom-0 before:left-[50%]' : 'hover:before:w-[50%] before:bottom-0 before:left-[50%]'} after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 ${filter === 'Series' ? 'after:w-[50%] after:bottom-0 after:right-[50%]' : 'hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}>
            <button onClick={() => setFilter('Series')}>Series</button>
          </div>
          <div className={`mx-2 mt-2 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 ${filter === 'Movies' ? 'before:w-[50%] before:bottom-0 before:left-[50%]' : 'hover:before:w-[50%] before:bottom-0 before:left-[50%]'} after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 ${filter === 'Movies' ? 'after:w-[50%] after:bottom-0 after:right-[50%]' : 'hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}>
            <button onClick={() => setFilter('Movies')}>Movies</button>
          </div>
          <div className={`mx-2 mt-2 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 ${filter === 'Voice Actors' ? 'before:w-[50%] before:bottom-0 before:left-[50%]' : 'hover:before:w-[50%] before:bottom-0 before:left-[50%]'} after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 ${filter === 'Voice Actors' ? 'after:w-[50%] after:bottom-0 after:right-[50%]' : 'hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}>
            <button onClick={() => setFilter('Voice Actors')}>Voice Actors</button>
          </div>
          <div className={`mx-2 mt-2 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 ${filter === 'Events' ? 'before:w-[50%] before:bottom-0 before:left-[50%]' : 'hover:before:w-[50%] before:bottom-0 before:left-[50%]'} after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 ${filter === 'Events' ? 'after:w-[50%] after:bottom-0 after:right-[50%]' : 'hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}>
            <button onClick={() => setFilter('Events')}>Events</button>
          </div>
        </div>

        <div className="bg-white rounded mx-2 mt-2 justify-end">
          <input
            type="text"
            placeholder="Search..."
            className="border text-black border-gray-300 rounded pl-2"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-3'>
        {currentItems.map((item) => (
          <div key={item.newsId} className="flex bg-white border border-s-gray-950 p-4 rounded shadow-md hover:shadow-lg cursor-pointer">
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
                    <button
                      key={index}
                      className="bg-gray-200 hover:bg-gray-400 text-gray-600 hover:text-white text-xs px-2 py-1 rounded mr-2"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 ${currentPage === 1 ? 'hidden' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${currentPage === totalPages ? 'hidden' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default News;
