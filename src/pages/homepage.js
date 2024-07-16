import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  const newsContent = [];
  for (let i = 1; i <= 6; i++) {
    newsContent.push({ name: `News ${i}`, description:`Description ${i}`});
  } 

  const forumTopics = [];
  for (let i = 1; i <= 3; i++) {
    forumTopics.push({ name: `Forum Topics ${i}`});
  } 

  const lists = [];
  for (let i = 1 ; i <= 4 ; i++){
    lists.push({ name: `Lists ${i}`});
  }

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
        <div className="w-4/5 my-2">
          <div className="flex justify-between font-semibold mb-2">
            <a>Movies</a>
            <a className="text-right text-black	no-underline">Database Num</a>
          </div>
          <div className="mt-2">
            Movies List || yan ana 10 tane resim olacak, resimlerin altında da isimleri yazacak
          </div>
        </div>
        <div className="w-4/5 my-2">
          <div className="flex justify-between font-semibold mb-2">
            <a>Series</a>
            <a className="text-right text-black	no-underline">Database Num</a>
          </div>
          <div className="mt-2">
            Series List || yan ana 10 tane resim olacak, resimlerin altında da isimleri yazacak
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-4/5 flex justify-between my-5">
        <div className="w-3/4">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Recently News</h3>
            <div className="grid grid-cols-3 gap-4 mb-2">
              {/* NewsLoop */}
              {newsContent.map((news, index) => (
                <div key={index} className="flex bg-gray-100 p-3 rounded">
                  <img
                    src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D12636882W10000H9574/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/letter-m-sticker.jpg"
                    alt={news.name}
                    className="w-20 h-20 mr-2 rounded"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="font-semibold line-clamp-1">{news.name}</div>
                    <div className="line-clamp-3">{news.description}</div>
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
              {forumTopics.map((forumTopics, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded mb-2">
                  <div>{forumTopics.name}</div>
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
            {lists.map((lists, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded mb-2">
                <div>{lists.name}</div>
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
