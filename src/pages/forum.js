import React from 'react';

function Forum() {
  return (
    <div className="container mx-auto p-4">
      <div className="top mb-8">
        {/* Page Name Section */}
        <div className="sections mb-4">
          <div className="pageName text-2xl font-bold">Forums</div>
        </div>
        {/* Pinned Topics Section */}
        <div className="pinned-topics mb-4 grid grid-cols-3 grid-rows-2 gap-4">
          <div className="bg-gray-100 p-4 rounded">Pinned forum topics</div>
          <div className='bg-gray-100 p-4 rounded'>Pinned forum topics</div>
          <div className='bg-gray-100 p-4 rounded'>Pinned forum topics</div>
          <div className='bg-gray-100 p-4 rounded'>Pinned forum topics</div>
          <div className='bg-gray-100 p-4 rounded'>Pinned forum topics</div>
          <div className='bg-gray-100 p-4 rounded'>Pinned forum topics</div>
        </div>
        {/* Create Topic Button */}
        <div className=" flex justify-end mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Topic</button>
        </div>
      </div>
      <div className="bottom flex">
        {/* Left Section: Topics Filter */}
        <div className="bottom-left w-1/4 pr-4">
          <div className="topics">
            <div className='mb-4'><button>Forum topics for filtering</button></div>
            <div className='mb-4'><button>Forum topics for filtering</button></div>
            <div className='mb-4'><button>Forum topics for filtering</button></div>
            <div className='mb-4'><button>Forum topics for filtering</button></div>
          </div>
        </div>
        {/* Right Section: Forum Topics and Pagination */}
        <div className="bottom-right w-3/4 pl-4">
          <div className="forum-topics ">
            <div className='bg-gray-100 p-4 mb-4 rounded'>Forum topics container || Only include Header</div>
            <div className='bg-gray-100 p-4 mb-4 rounded'>Forum topics container</div>
            <div className='bg-gray-100 p-4 mb-4 rounded'>Forum topics container</div>
            <div className='bg-gray-100 p-4 mb-4 rounded'>Forum topics container</div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
