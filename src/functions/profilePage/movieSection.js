import React from 'react';

const MoviesSection = ({ movieStatusCounts, totalMovies, rewatchedMovies, userMovies, handleItemClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-blue-500';
      case 'On Hold':
        return 'bg-yellow-500';
      case 'Dropped':
        return 'bg-red-500';
      case 'Plan to Watch':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='flex mb-4'>
      <div className='w-1/4'>
        <div className='mb-2 font-bold text-xl underline'>Movies</div>
        {['Completed', 'On Hold', 'Dropped', 'Plan to Watch'].map(status => (
          <div key={status} className='mb-2 flex items-center'>
            <div className={`w-4 h-4 rounded-full ${getStatusColor(status)} mr-2`} />
            <span className='font-semibold text-gray-700'>{status}:</span>
            <span className='ml-2 text-lg text-gray-800'>
              {status === 'Completed' ? movieStatusCounts.completed : 
              status === 'On Hold' ? movieStatusCounts.onHold :
              status === 'Dropped' ? movieStatusCounts.dropped :
              status === 'Plan to Watch' ? movieStatusCounts.planToWatch : 0}
            </span>
          </div>
        ))}
      </div>
      <div className='w-1/4 mt-3'>
        <br/>
        {['Total Entries', 'Rewatched'].map(detail => (
          <div key={detail} className='mb-2'>
            <span className='font-semibold text-gray-700'>{detail}:</span>
            <span className='ml-2 text-lg text-gray-800'>
              {detail === 'Total Entries' ? totalMovies :
              detail === 'Rewatched' ? rewatchedMovies : 0}
            </span>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 gap-4 w-2/4'>
        <div className='font-bold text-xl underline'>Recently Updated</div>
        {userMovies.slice(0, 3).length > 0 ? userMovies.slice(0, 3).map((movie, idx) => (
          <div key={idx} className="flex items-center bg-gradient-to-br from-slate-50 to-slate-200 border p-2 rounded hover:shadow-md cursor-pointer" onClick={() => handleItemClick(movie.name)}>
            <div className="flex-shrink-0 mr-4">
              <img src={movie.imgSrc || 'https://via.placeholder.com/64'} alt={movie.name} className="w-12 h-16 rounded"/>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between">
                <h2 className="text-black text-lg font-semibold">{movie.name}</h2>
                <span className="text-gray-600 text-sm">{movie.year || 'Date'}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 text-sm">{movie.genres || 'Genres'}</span>
              </div>
            </div>
          </div>
        )) : (
          <div>No movies found</div>
        )}
      </div>
    </div>
  );
};

export default MoviesSection;
