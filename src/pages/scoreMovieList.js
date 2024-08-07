import React from 'react';
import Star from './star';

const SelectedMoviesList = ({ selectedMovies = [], user = { movies: [] } }) => {
  const generateStars = (score) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < score} />
    ));
  };

  return (
    <div className='mt-4'>
      {selectedMovies.length > 0 && (
        <div>
          <h2 className='text-xl font-bold mb-2'>Movies with Selected Score</h2>
          <ul className='list-none'>
            {selectedMovies.map((movie) => (
              <li key={movie.id} className="flex mb-4 items-start">
                <img src={movie.imgSrc} alt={movie.name} className="w-16 h-24 object-cover mr-4" />
                <div>
                  <span className="block text-lg font-semibold mb-1">{movie.name}</span>
                  <div className="flex">
                    {generateStars(user.movies.find(m => m.id === movie.id)?.score || 0)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectedMoviesList;
