import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Star from './star'; 

const statusMapping = {
  c: 'completed',
  ptw: 'planToWatch',
  oh: 'onHold',
  d: 'dropped',
  w: 'watching'
};

const getStatusColor = (status) => {
  const normalizedStatus = statusMapping[status] || status;
  switch (normalizedStatus) {
    case 'completed':
      return 'bg-blue-500';
    case 'onHold':
      return 'bg-yellow-500';
    case 'watching':
      return 'bg-green-500';
    case 'dropped':
      return 'bg-red-500';
    case 'planToWatch':
      return 'bg-gray-500';
    default:
      return 'bg-gray-300';
  }
};

const generateStars = (score) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star key={index} filled={index < score} />
  ));
};

const Journal = ({ date, image, name, score, status, movieId }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/detail/${encodeURIComponent(name)}`); 
  };

  return (
    <div className='mb-4'>
      <h2 className='text-xl font-bold mb-2'>{date}</h2>
      <div className='flex items-center bg-gradient-to-br from-sky-300 to-sky-500 rounded p-3 cursor-pointer' onClick={handleMovieClick}>
        <div className={`w-3 h-3 rounded-full ${getStatusColor(status)} mr-4`} />
        <img src={image} alt={name} className='w-14 h-20 object-cover mr-4 rounded' />
        <div>
          <div className='text-lg font-semibold'>{name}</div>
          <div className='flex items-center mt-1'>
            {generateStars(score)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
