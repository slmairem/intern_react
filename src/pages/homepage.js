import React from 'react';
import { useNavigate } from 'react-router-dom';
import forumData from '../assets/forumData.json';
import newsData from '../assets/newsData.json';
import movieData from '../assets/movieData.json';

function Homepage() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const forumTopics = forumData.slice(0, 3); // Show max 3 forum topics
  const recentNews = newsData.slice(0, 6); // Show max 6 news items
  const lists = Array.from({ length: 4 }, (_, i) => ({ name: `Lists ${i + 1}` }));

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
          <a href="/login" className="text-blue-500 ml-2">login</a> if you have an account.
        </div>   
      </div>
      
      {/* Lists section */}
      <div className="w-full flex flex-col items-center">
        {['Movies', 'Series'].map((type) => (
          <div className="w-4/5 my-2" key={type}>
            <div className="flex justify-between font-medium mb-2 text-gray-500">
              <a>{type}</a>
              <a className="text-right text-gray-500 no-underline">Database Num</a>
            </div>
            <div className="mt-2">
              <div className="grid grid-cols-10 gap-2">
                {movieData.filter(item => item.type === type).map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
                    <img src={item.imgSrc} alt={item.name} className="w-24 h-32 object-cover"/>
                    <span className='font-medium'>{item.name}</span>
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
              <a href="/news" className="text-blue-500 no-underline cursor-pointer">View More...</a>
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
              <a href="/forum" className="text-blue-500 no-underline cursor-pointer">View More...</a>
            </div>
          </div>
        </div>
        <div className="w-1/4 ml-5 border-l ">
          <div className="mb-5 ml-5">
            <h3 className="text-xl font-semibold">Popular Lists</h3>
            {lists.map((list, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded mb-2">
                <div>{list.name}</div>
              </div>
            ))}
            <div className="ml-4 text-right mb-2">
              <a href="/lists" className="text-blue-500 no-underline cursor-pointer">View More...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
