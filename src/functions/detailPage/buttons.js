import React, { useState, useRef, useEffect } from 'react';
import { FaHeart, FaTimes } from 'react-icons/fa';
import Rating from './rating.js';
import Dropdown from './dropdown.js'; 

const Buttons = () => {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [isDropdownChanged, setIsDropdownChanged] = useState(false);

  const handleHeartClick = () => {
    setIsHeartActive(!isHeartActive);
  };

  const handleStatusChange = (statusChanged) => {
    setIsDropdownChanged(statusChanged);
  };

  const handleResetClick = () => {
    setIsHeartActive(false);
    setIsDropdownChanged(false);
    resetDropdown();
  };

  const resetDropdown = () => {
 
    if (dropdownRef.current) {
      dropdownRef.current.resetStatus(); 
    }
  };

  const dropdownRef = useRef(null);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <Dropdown ref={dropdownRef} onStatusChange={handleStatusChange} /> 
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

      {(isHeartActive || isDropdownChanged) && (
        <div>
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

export default Buttons;
