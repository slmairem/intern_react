import React from 'react';

function SearchResults(){
  
  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Search Results</div>
      </div>

      <div className='flex'>
        <div className="left w-3/4 pr-4">
        <div className="pageName text-2xl font-bold mb-3">Movies</div>
          <div className='grid grid-row-10'>
            <div className="flex p-4 rounded-lg border shadow-md">
              <img className="w-16 h-24 border-1 shadow-lg" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt=""/>
              <div className="ml-4">
                <div className="text-xl font-bold">Name</div>
                <span className="flex mt-2 text-sm">Likes: 123</span>
                <div className="mt-2 text-gray-700 dark:text-gray-300">Description</div>
              </div>
            </div>
          </div>
        </div>
        <div className="left w-1/4 pr-4 pt-12">
          <div className="pl-5">
            {/* Default All, tıkladığında orası gözükecek.
            Liste içi filtreleme ve grid özelliklerini sonradan ekleyebilirsin */}
            <div className='mb-2'><button>All</button></div>
            <div className='mb-2'><button>Movies</button></div>
            <div className='mb-2'><button>Series</button></div>
            <div className='mb-2'><button>Characters</button></div>
            <div className='mb-2'><button>Voice Actors</button></div>
            <div className='mb-2'><button>Lists</button></div>
            <div className='mb-2'><button>News</button></div>
            <div className='mb-2'><button>Users</button></div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default SearchResults;