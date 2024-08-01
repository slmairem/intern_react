import React, { useState } from 'react';

const Star = ({ filled, onClick }) => (
  <svg
    className={`w-6 h-6 ms-2 cursor-pointer ${filled ? 'text-yellow-300' : 'text-gray-300'}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
    onClick={onClick}
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>
);

const ResetIcon = ({ onClick }) => (
  <svg
    className="w-4 h-4 ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={onClick}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHovered(index + 1);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleResetClick = () => {
    setRating(0); 
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          filled={index < (hovered || rating)}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
      {rating > 0 && <ResetIcon onClick={handleResetClick} />}
    </div>
  );
};

export default Rating;
