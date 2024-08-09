import React from 'react';

const MovieSeriesSection = ({ data, handleItemClick }) => {
  const { Movies = [], Series = [] } = data;

  return (
    <div className="w-4/5 my-2">
      {/* Movies Section */}
      <div className="my-4">
        <div className="flex justify-between font-medium mb-2 text-gray-500 text-xl">
          <span>Movies</span>
          <span className="text-right text-gray-500 no-underline">{Movies.length}</span>
        </div>
        <div className="mt-2">
          <div className="grid grid-cols-10 grid-row-1 gap-2">
            {Movies.slice(0, 10).map((item) => (
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

      {/* Series Section */}
      <div>
        <div className="flex justify-between font-medium mb-2 text-gray-500 text-xl">
          <span>Series</span>
          <span className="text-right text-gray-500 no-underline">{Series.length}</span>
        </div>
        <div className="mt-2">
          <div className="grid grid-cols-10 grid-row-1 gap-2">
            {Series.slice(0, 10).map((item) => (
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
    </div>
  );
};

export default MovieSeriesSection;
