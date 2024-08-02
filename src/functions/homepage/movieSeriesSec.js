import React from 'react';

const MovieSeriesSection = ({ type, movieData, handleItemClick }) => {
  const itemCount = movieData.filter(item => item.type === type).length;

  return (
    <div className="w-4/5 my-2">
      <div className="flex justify-between font-medium mb-2 text-gray-500 text-xl">
        <span>{type}</span>
        <span className="text-right text-gray-500 no-underline">{itemCount}</span>
      </div>
      <div className="mt-2">
        <div className="grid grid-cols-10 grid-row-1 gap-2">
          {movieData
            .filter(item => item.type === type)
            .slice(0, 10)
            .map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col items-center group"
              >
                <img 
                  src={item.imgSrc} 
                  alt={item.name} 
                  className="w-24 h-32 object-cover rounded-md duration-300 group-hover:scale-110 cursor-pointer"
                  onClick={() => handleItemClick(item.name)}
                />
                <span 
                  className='font-semibold text-center mt-2 text-l cursor-pointer'
                  onClick={() => handleItemClick(item.name)}
                >
                  {item.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSeriesSection;
