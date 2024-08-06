import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import forumData from '../assets/forumData.json';
import newsData from '../assets/newsData.json';
import movieData from '../assets/movieData.json';
import userData from '../assets/userData.json'; 
import MovieSeriesSection from '../functions/homepage/movieSeriesSec';
import NewsSection from '../functions/homepage/newsSec';
import ForumSection from '../functions/homepage/forumSec';
import PopularListsSection from '../functions/homepage/popularListsSec';

export const TextRevealTW = () => {
  const text = "\nDidn't you discover the Neverland yet?";

  return (
    <h1 className="pb-4 text-lg font-semibold text-white font-PlaywriteBE">
      {text.split('\n').map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split('').map((char, index) => (
            <span
              className="inline-block animate-text-reveal"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <br />
        </div>
      ))}
    </h1>
  );
};

function Homepage() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const handleItemClick = (name) => {
    const encodedName = encodeURIComponent(name);
    navigate(`/detail/${encodedName}`);
  };

  const forumTopics = forumData.slice(0, 3);
  const recentNews = newsData.slice(0, 6);

  const getMovieImages = (movieIds) => {
    return movieIds.map(id => {
      const movie = movieData.find(movie => movie.id === id);
      return movie ? movie.imgSrc : '';
    });
  };

  const lists = userData.flatMap(user => user.publishedLists.map(list => ({
    ...list,
    publishUser: user.username
  })));
  const popularLists = lists.sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  return (
    <div className="flex flex-col items-center w-full font-IndieFlower text-lg">
      {/* User Auth section */}
      <div className="relative w-full bg-gradient-to-b via-sky-600 from-indigo-600 transition-transform text-center py-20">
        <div className="relative z-10 text-lg font-extrabold text-white font-PlaywriteBE">
          Animation Listing Page
        </div> 
        <TextRevealTW />
        <div className="mt-4">
          <button 
            type="button" 
            className="bg-amber-700 text-white px-4 py-2 rounded mr-2 hover:bg-amber-800 transition duration-500 hover:scale-105"
            onClick={navigateToRegister}
          >
            Create a free account
          </button>
          or 
          <Link to="/login" className="text-slate-100 ml-2 no-underline font-bold hover:text-amber-700 duration-500 hover:text-3xl">login</Link> if you have an account.
        </div>   
      </div>
      
      <div className="w-full flex flex-col items-center pt-4 font-IndieFlower">
        <MovieSeriesSection type="Movies" movieData={movieData} handleItemClick={handleItemClick} />
        <MovieSeriesSection type="Series" movieData={movieData} handleItemClick={handleItemClick} />
      </div>

      {/* Bottom */}
      <div className="w-4/5 flex justify-between my-5 font-IndieFlower">
        <div className="w-3/4">
          <NewsSection recentNews={recentNews} />
          <ForumSection forumTopics={forumTopics} />
        </div>
        <div className="w-1/4 ml-5 border-l font-IndieFlower">
          <PopularListsSection popularLists={popularLists} getMovieImages={getMovieImages} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
