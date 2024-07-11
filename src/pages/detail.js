import React, { useState } from 'react';

function Details() {
  {/* Dropdown Button Commands */}
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="relative">
        <img 
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=sph" 
          alt="backImg" 
          className="w-full absolute top-0 left-0 z-0 h-60 object-cover" 
        />
      </div>

      <div className="relative flex items-start mt-10">
        <div className="bg-gray-200 w-56 h-64 relative overflow-hidden ml-10 z-10">
          <img 
            src="https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg" 
            alt="profilePic" 
            className="object-cover h-64 w-full"
          />
        </div>

        <div className="ml-6 z-10 w-full">
          <h3 className="text-black text-2xl font-bold mt-2">Name</h3>
          <p className="text-gray-700 mt-2 overflow-hidden max-w-max pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center bg-pink-300 h-12 font-bold z-0 shadow-md -mt-20 w-full">
        <button type="button" className="navBut mx-2 mt-2">Overview</button>
        <button type="button" className="navBut mx-2 mt-2">Characters</button>
        <button type="button" className="navBut mx-2 mt-2">Staff</button>
        <button type="button" className="navBut mx-2 mt-2">Reviews</button>
        <button type="button" className="navBut mx-2 mt-2">Stats</button>
        <button type="button" className="navBut mx-2 mt-2">Social</button>
      </div>

      <div className="flex mt-4 mx-8 h-full">
        <div className="flex flex-col items-center pt-3 h-full">
          <div className="flex">
            <button className="bg-blue-500 text-white px-4 py-2 mr-4 rounded w-36">AddList</button>
            <button className="bg-red-500 text-white rounded w-12">❤️</button>
          </div>

          <div className="mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-52">Rating</button>
          </div>

          <div className="border border-black rounded w-52 h-56 mt-2">
            <div className="details">
              <div>
                DETAILS
                Genres, Episodes, Year
              </div>
            </div>
          </div>

          <div className="border border-black rounded w-52 h-52 mt-2 mb-2">
            <div className="details">
              <div>
                AvgRatingTable
              </div>
            </div>
          </div>
        </div>

        <div className='h-full w-full'>
          <div className='ml-5'>
            <h4>Characters</h4>
          </div>
          <br />
          <div className="mb-4 grid grid-cols-2 grid-rows-3 gap-4 ml-4">
            <div className="bg-gray-100 p-4 rounded">Characters</div>
            <div className="bg-gray-100 p-4 rounded">Characters</div>
            <div className="bg-gray-100 p-4 rounded">Characters</div>
            <div className="bg-gray-100 p-4 rounded">Characters</div>
            <div className="bg-gray-100 p-4 rounded">Characters</div>
            <div className="bg-gray-100 p-4 rounded">Characters</div>
          </div>
          <div className="ml-4 text-right mb-2">
            <a href="#" className="text-blue-500 no-underline cursor-pointer">View More...</a>
          </div>
          <div className='border-b ml-4'></div>
        </div>
        
      </div>
        

      {/* DropdownButton NEED REVISE!!!!!!!! */}
      {/* 
      <button id="dropdownDelayButton" onClick={toggleDropdown} className="z-10 bg-blue-500 text-white px-4 py-2 rounded w-52">Add to List</button>
      <div id="dropdownDelay" className={`z-10 ${isOpen ? 'block' : 'hidden'}  rounded-lg shadow w-44`}>
        <ul className="py-2 text-sm " aria-labelledby="dropdownDelayButton">
          <li><a className="block bg-blue-500 text-white px-4 py-2 rounded w-52 hover:bg-gray-100 no-underline cursor-pointer">Watching</a></li>
          <li><a className="block bg-blue-500 text-white px-4 py-2 rounded w-52 hover:bg-gray-100 no-underline cursor-pointer">Completed</a></li>
          <li><a className="block bg-blue-500 text-white px-4 py-2 rounded w-52 hover:bg-gray-100 no-underline cursor-pointer">Re-Watching</a></li>
          <li><a className="block bg-blue-500 text-white px-4 py-2 rounded w-52 hover:bg-gray-100 no-underline cursor-pointer">Plan to Watch</a></li>
        </ul>
      </div> */}

  
      
    </div>
  );
}

export default Details;
