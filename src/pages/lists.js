import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lists(){
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Lists</div>
        <button 
            type="button" 
            className="bg-gray-700 text-white px-4 py-2 rounded mr-2"
            onClick={navigateToLogin}
          >
            Make your own Lists.
          </button>
      </div>
      
      <div className='middle'>
        <div className='font-semibold	mb-2'>Popular This Week</div>
        <div className='grid grid-cols-3 grid-rows-2'>
          <div className='pr-20'>
            <div className="flex -space-x-4">
            <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            </div>
            <div className="mt-2 text-xl font-bold text-gray-900">List Name</div>
            <div className="flex items-center justify-between mt-1 text-gray-600 dark:text-gray-400">
              <span className="text-sm">Username</span>
              <div className="flex space-x-4">
                <span className="text-sm">Likes: </span>
                <span className="text-sm">Comments: </span>
              </div>
            </div>
          </div>
          <div className='pr-20'>
            <div className="flex -space-x-4">
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            </div>
            <div className="mt-2 text-xl font-bold text-gray-900">List Name</div>
            <div className="flex items-center justify-between mt-1 text-gray-600 dark:text-gray-400">
              <span className="text-sm">Username</span>
              <div className="flex space-x-4">
                <span className="text-sm">Likes: </span>
                <span className="text-sm">Comments: </span>
              </div>
            </div>
          </div>
          <div className='pr-20'>
            <div className="flex -space-x-4">
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-24 h-32 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            </div>
            <div className="mt-2 text-xl font-bold text-gray-900">List Name</div>
            <div className="flex items-center justify-between mt-1 text-gray-600 dark:text-gray-400">
              <span className="text-sm">Username</span>
              <div className="flex space-x-4">
                <span className="text-sm">Likes: </span>
                <span className="text-sm">Comments: </span>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      <div className="flex">
      {/* Sol taraf: Recently Updated */}
      <div className="w-3/4 p-4">
        <div className='font-semibold mb-2'>Recently Updated</div>
        <div className='grid grid-cols-2 gap-4'>
          <div className="flex items-start p-4 rounded-lg border shadow-md">
            <div className="flex-shrink-0 flex -space-x-4">
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            </div>
            <div className="ml-4">
              <div className="text-xl font-bold">List Name</div>
              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <span className="text-sm">Username</span>
                <span className="ml-2 text-sm">Likes: 123</span>
              </div>
              <div className="mt-2 text-gray-700 dark:text-gray-300">List Description</div>
            </div>
          </div>
          <div className="flex items-start p-4 rounded-lg border shadow-md">
            <div className="flex-shrink-0 flex -space-x-4">
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            </div>
            <div className="ml-4">
              <div className="text-xl font-bold">List Name</div>
              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <span className="text-sm">Username</span>
                <span className="ml-2 text-sm">Likes: 123</span>
              </div>
              <div className="mt-2 text-gray-700 dark:text-gray-300">List Description</div>
            </div>
          </div>
          {/* İki içerik daha ekleyebilirsiniz */}
        </div>
      </div>

      {/* Sağ taraf: Most Likes */}
      <div className="w-1/4 p-4 border-l grid grid-row-4">
        <div className='font-semibold mb-2'>Users Favourite</div>
        <div className="flex flex-col space-y-4 mb-3">
          <div className='pr-20'>
            <div className="flex -space-x-4">
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            </div>
            <div className="mt-2 text-xl font-bold text-gray-900">List Name</div>
            <div className="flex items-center justify-between mt-1 text-gray-600 dark:text-gray-400">
              <span className="text-sm">Username</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mb-3">
          <div className='pr-20'>
            <div className="flex -space-x-4">
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            </div>
            <div className="mt-2 text-xl font-bold text-gray-900">List Name</div>
            <div className="flex items-center justify-between mt-1 text-gray-600 dark:text-gray-400">
              <span className="text-sm">Username</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Lists;