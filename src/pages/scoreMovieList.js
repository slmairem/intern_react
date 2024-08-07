import React from 'react';
import { useNavigate } from 'react-router-dom';
import Star from './star';

const SelectedMoviesList = ({ selectedMovies = [], user = { movies: [] }, selectedType = 'Movies', selectedScore = 0 }) => {
  const navigate = useNavigate();

  const generateStars = (score) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < score} />
    ));
  };

  const handleMovieClick = (movieId) => {
    const movie = selectedMovies.find((movie) => movie.id === movieId);
    if (movie) {
      navigate(`/detail/${encodeURIComponent(movie.name)}`);
    }
  };

  return (
    <div className='mt-4'>
      {selectedMovies.length > 0 && (
        <div>
            <h2 className='text-xl font-bold mb-2'>
                {selectedType} with {selectedScore} Stars
            </h2>

            {selectedMovies.map((movie) => (
                <li
                key={movie.id}
                className="flex mb-4 items-start border rounded cursor-pointer"
                onClick={() => handleMovieClick(movie.id)}
                >
                <img src={movie.imgSrc} alt={movie.name} className="w-16 h-24 object-cover mr-4 rounded" />
                <div>
                    <span className="block text-lg font-semibold mb-1 mt-3">{movie.name}</span>
                    <div className="flex">
                    {generateStars(user.movies.find(m => m.id === movie.id)?.score || 0)}
                    </div>
                </div>
                </li>
            ))}
        </div>
      )}
    </div>
  );
};

export default SelectedMoviesList;
