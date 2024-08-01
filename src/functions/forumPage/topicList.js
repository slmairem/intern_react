import React from 'react';

const TopicList = ({ topics, getFormattedDate, currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="bottom-right w-3/4 pl-4">
      {topics.length > 0 ? (
        <>
          {topics.map(forum => (
            <div key={forum.forumId} className="relative bg-gray-100 p-4 mb-4 rounded cursor-pointer hover:shadow-md">
              <div className="absolute top-2 right-2 text-sm text-gray-600">{getFormattedDate(forum.date)}</div>
              <div className="text-sm text-gray-600">{forum.publishUser}</div>
              <div className="text-lg font-semibold">{forum.forumName}</div>
              <div className="mt-2 tags flex flex-wrap space-x-2 rounded">
                {forum.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-300 px-2 py-1 rounded text-sm hover:text-stone-100 hover:bg-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-center">
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
        </>
      ) : (
        <div>No topics available</div>
      )}
    </div>
  );
};

export default TopicList;
