import React, { useState } from 'react';
import data from '../assets/forumData.json';

function Forum() {
  const forumTopicsPin = Array.from({ length: 6 }, (_, i) => ({
    name: `Pinned Forum Topics ${i + 1}`
  }));

  // Filtering
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 3;

  const filteredData = filter === 'All' ? data : data.filter(item => item.tags.includes(filter));

  // Pagination logic
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = filteredData.slice(indexOfFirstTopic, indexOfLastTopic);

  const totalPages = Math.ceil(filteredData.length / topicsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="top mb-8">
        {/* Page Name Section */}
        <div className="sections mb-4">
          <div className="pageName text-2xl font-bold">Forums</div>
        </div>

        {/* Pinned Topics Section */}
        <div className="pinned-topics mb-4 grid grid-cols-3 grid-rows-2 gap-4">
          {forumTopicsPin.map((forum, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded">
              <div>{forum.name}</div>
            </div>
          ))}
        </div>

        {/* Create Topic Button */}
        <div className="flex justify-end mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Topic</button>
        </div>
      </div>

      <div className="bottom flex">
        {/* Left Section: Topics Filter */}
        <div className="bottom-left w-1/4 pr-4">
          <div className="topics">
            {['All', 'Movies', 'Series', 'Voice Actors', 'Events'].map((tag) => (
              <div className="navBut mx-2 mt-2" key={tag}>
                <button onClick={() => setFilter(tag)}>{tag}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Forum Topics and Pagination */}
        <div className="bottom-right w-3/4 pl-4">
          {currentTopics.map((forum, index) => (
            <div key={forum.forumId} className="bg-gray-100 p-4 mb-4 rounded">
              <div>{forum.forumName}</div>
            </div>
          ))}
          
          <div className="flex justify-center">
            <button 
              onClick={handlePrevious}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              disabled={currentPage === 1}
            > Previous </button>
            <button 
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={currentPage === totalPages}
            > Next </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
