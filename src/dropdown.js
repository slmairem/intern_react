import React, { useState } from 'react';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Watching');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        style={{ width: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        <span className="flex-grow text-left font-semibold">{selectedStatus}</span>
       
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 max-w-full">
          <div className="py-2 text-sm text-center text-gray-700">
            {['Watching', 'Completed', 'On-hold', 'Dropped', 'Plan to Watch'].map((status) => (
              <div key={status}>
                <a
                  onClick={() => handleStatusChange(status)}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer no-underline text-black"
                >
                  {status}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
