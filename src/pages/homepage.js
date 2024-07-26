import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import forumData from '../assets/forumData.json';
import newsData from '../assets/newsData.json';
import movieData from '../assets/movieData.json';
import listsData from '../assets/listsData.json';

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

  const movieCount = movieData.filter(item => item.type === 'Movies').length;
  const seriesCount = movieData.filter(item => item.type === 'Series').length;

  const getMovieImages = (movieIds) => {
    return movieIds.map(id => {
      const movie = movieData.find(movie => movie.id === id);
      return movie ? movie.imgSrc : '';
    });
  };

  const Placeholder = ({ size }) => (
    <div className={`${size} bg-gray-200 dark:bg-gray-700 border-1 shadow-lg`}></div>
  );

  const popularLists = listsData.sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  return (
    <div className="flex flex-col items-center w-full font-IndieFlower text-lg">
      {/* User Auth section */}
      <div className="relative w-full bg-gradient-to-b via-sky-600 from-indigo-600 transition-transform text-center py-20">
        <div className="relative z-10 text-lg font-extrabold text-white font-PlaywriteBE">
            App Name 
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
      
      {/* Lists section */}
      <div className="w-full flex flex-col items-center pt-4 font-IndieFlower">
        {['Movies', 'Series'].map((type) => (
          <div className="w-4/5 my-2" key={type}>
            <div className="flex justify-between font-medium mb-2 text-gray-500 text-xl">
              <span>{type}</span>
              <span className="text-right text-gray-500 no-underline">
                {type === 'Movies' ? movieCount : seriesCount}
              </span>
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
        ))}
      </div>

      {/* Bottom section */}
      <div className="w-4/5 flex justify-between my-5 font-IndieFlower">
        <div className="w-3/4">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Recently News</h3>
            <div className="grid grid-cols-3 gap-4 mb-2">
              {recentNews.map((news) => (
                <div key={news.newsId} className="flex bg-gray-100 p-3 rounded cursor-pointer hover:shadow-md">
                  <img
                    src={news.imgSrc}
                    alt={news.newsName}
                    className="w-20 h-20 mr-2 rounded"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="font-semibold line-clamp-1">{news.newsName}</div>
                    <div className="line-clamp-3">{news.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ml-4 text-right mb-2">
              <Link to="/news" className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900">View More...</Link>
            </div>
          </div>
          <div className="mb-5 ">
            <h3 className="text-xl font-semibold">Forum Topics</h3>
            {forumTopics.map((forum) => (
              <div key={forum.forumId} className="bg-gray-100 p-4 rounded mb-2 cursor-pointer hover:shadow-md">
                <div className="text-sm text-gray-600">{forum.publishUser}</div>
                <div className="text-md font-semibold">{forum.forumName}</div>
              </div>
            ))}
            <div className="ml-4 text-right mb-2">
              <Link to="/forum" className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900">View More...</Link>
            </div>
          </div>
        </div>
        <div className="w-1/4 ml-5 border-l font-IndieFlower">
          <div className="mb-5 ml-5">
            <h3 className="text-xl font-semibold font-IndieFlower">Popular Lists</h3>
            {popularLists.map((list) => {
              const images = getMovieImages(list.movies);
              const placeholderCount = 4 - images.length;

              return (
                <div key={list.listId} className="flex flex-col items-start p-4 rounded-lg border shadow-md mb-2 cursor-pointer hover:shadow-lg">
                  <div className="flex flex-shrink-0 -space-x-4 mb-4">
                    {images.map((src, index) => (
                      <img key={index} className="w-16 h-24 border-1 shadow-lg" src={src} alt="" />
                    ))}
                    {Array.from({ length: placeholderCount }).map((_, index) => (
                      <Placeholder key={index} size="w-16 h-24" />
                    ))}
                  </div>
                  <div className="w-full overflow-hidden">
                    <div className="text-xl font-bold truncate">{list.listName}</div>
                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                      <span className="text-sm truncate">{list.publishUser}</span>
                      <span className="ml-2 text-sm truncate">Likes: {list.likes}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="ml-4 text-right mb-2">
              <Link to="/lists" className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900">View More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
