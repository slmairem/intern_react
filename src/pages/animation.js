import React from 'react';

function Animation(){
  
  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Most Populars</div>

        <div className="relative w-full flex justify-center  font-bold z-0 mb-2">
          <div><button type="button" className="navBut mx-2 mt-2">Movies</button></div>
          <div><button type="button" className="navBut mx-2 mt-2">Series</button></div>
          <div><button type="button" className="navBut mx-2 mt-2">Voice Actors</button></div>
        </div>
      </div>

      <div className=''>
        <div className="pageName text-2xl font-bold mb-3">Movies</div>
        <div className='grid grid-row-10'>
          <div className="flex items-start p-4 rounded-lg border shadow-md">
            <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            <div className="ml-4">
              <div className="text-xl font-bold">Name</div>
              <span className="flex mt-2 text-sm">Likes: 123</span>
              <div className="mt-2 text-gray-700 dark:text-gray-300">Description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Animation;