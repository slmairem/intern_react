import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import forumData from '../assets/forumData.json';
import newsData from '../assets/newsData.json';
import movieData from '../assets/movieData.json';
import listsData from '../assets/listsData.json';

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
    <div className="flex flex-col items-center w-full">
      {/* User Auth section */}
      <div className="text-center my-5">
        <div className="text-lg font-semibold">
          App Name 
          <br />
          Didn't you discover the Neverland yet? 
        </div> 
        <div className="mt-4">
          <button 
            type="button" 
            className="bg-gray-700 text-white px-4 py-2 rounded mr-2"
            onClick={navigateToRegister}
          >
            Create a free account
          </button>
          or 
          <Link to="/login" className="text-blue-500 ml-2">login</Link> if you have an account.
        </div>   
      </div>
      
      {/* Lists section */}
      <div className="w-full flex flex-col items-center">
        {['Movies', 'Series'].map((type) => (
          <div className="w-4/5 my-2" key={type}>
            <div className="flex justify-between font-medium mb-2 text-gray-500">
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
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => handleItemClick(item.name)}
                    >
                      <img src={item.imgSrc} alt={item.name} className="w-24 h-32 object-cover rounded-md"/>
                      <span className='font-medium text-center mt-2'>{item.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="w-4/5 flex justify-between my-5">
        <div className="w-3/4">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Recently News</h3>
            <div className="grid grid-cols-3 gap-4 mb-2">
              {recentNews.map((news) => (
                <div key={news.newsId} className="flex bg-gray-100 p-3 rounded">
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
              <Link to="/news" className="text-blue-500 no-underline cursor-pointer">View More...</Link>
            </div>
          </div>
          <div className="mb-5 ">
            <h3 className="text-xl font-semibold">Forum Topics</h3>
            {forumTopics.map((forum) => (
              <div key={forum.forumId} className="bg-gray-100 p-4 rounded mb-2">
                <div>{forum.forumName}</div>
              </div>
            ))}
            <div className="ml-4 text-right mb-2">
              <Link to="/forum" className="text-blue-500 no-underline cursor-pointer">View More...</Link>
            </div>
          </div>
        </div>
        <div className="w-1/4 ml-5 border-l ">
          <div className="mb-5 ml-5">
            <h3 className="text-xl font-semibold">Popular Lists</h3>
            {popularLists.map((list) => {
              const images = getMovieImages(list.movies);
              const placeholderCount = 4 - images.length;

              return (
                <div key={list.listId} className="flex flex-col items-start p-4 rounded-lg border shadow-md mb-2">
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
              <Link to="/lists" className="text-blue-500 no-underline cursor-pointer">View More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
