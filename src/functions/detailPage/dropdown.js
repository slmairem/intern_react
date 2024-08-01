import React, { useState, useRef, useEffect } from 'react';
import { FaHeart, FaTimes } from 'react-icons/fa';
import Rating from './rating.js';

const Dropdown = ({ type, reset, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Add to List');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setIsOpen(false);
    onStatusChange(true); // Notify parent component of status change
  };

  useEffect(() => {
    if (reset) {
      setSelectedStatus('Add to List');
    }
  }, [reset]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Watching':
        return 'bg-green-500 hover:bg-green-600';
      case 'Completed':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'On-hold':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Dropped':
        return 'bg-red-500 hover:bg-red-600';
      case 'Plan to Watch':
        return 'bg-gray-500 hover:bg-gray-600';
      default:
        return 'bg-purple-500 hover:bg-purple-600';
    }
  };

  const statusOptions = ['Watching', 'Completed', 'On-hold', 'Dropped', 'Plan to Watch'];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${getStatusColor(selectedStatus)}`}
        type="button"
        style={{ width: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        <span className="flex-grow text-left font-semibold">{selectedStatus}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-10 w-44 max-w-full">
          <div className="py-2 text-sm text-center text-gray-700 rounded">
            {statusOptions.map((status) => (
              <div key={status}>
                <a
                  onClick={() => handleStatusChange(status)}
                  className={`block px-4 py-2 cursor-pointer no-underline rounded text-white ${getStatusColor(status)}`}
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

const Details = () => {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isDropdownChanged, setIsDropdownChanged] = useState(false);

  const handleHeartClick = () => {
    setIsHeartActive(!isHeartActive);
    setIsDropdownChanged(true); // Trigger reset button visibility
  };

  const handleStatusChange = (statusChanged) => {
    setIsDropdownChanged(statusChanged);
  };

  const handleResetClick = () => {
    setIsHeartActive(false);
    setIsDropdownChanged(false); 
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <Dropdown type="Movies" reset={isDropdownChanged} onStatusChange={handleStatusChange} />
        <button
          onClick={handleHeartClick}
          className={`relative inline-flex items-center justify-center w-10 h-10 ${
            isHeartActive ? 'bg-cyan-600' : 'bg-red-900'
          } text-white rounded-lg text-xs shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-950`}
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <FaHeart aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="mt-4">
        <Rating />
      </div>

      {(isDropdownChanged || isHeartActive) && (
        <div >
          <button
            onClick={handleResetClick}
            className="relative inline-flex items-center justify-center w-10 h-10 bg-gray-500 text-white rounded-lg text-xs shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <FaTimes aria-hidden="true" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;
