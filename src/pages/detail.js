import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/movieData.json';

function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('Overview');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const characters = Array.from({ length: 6 }, (_, i) => ({ name: `Character ${i + 1}` }));
  const staff = Array.from({ length: 6 }, (_, i) => ({ name: `Staff ${i + 1}` }));

  const { id } = useParams();
  const item = data.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative">
        <img 
          src={item.backSrc}
          alt="Background" 
          className="w-full absolute top-0 left-0 z-0 h-60 object-cover" 
        />
      </div>

      <div className="relative flex items-start mt-10">
        <div className="bg-gray-200 w-56 h-64 relative overflow-hidden ml-10 z-10">
          <img 
            src={item.imgSrc}
            alt="Profile" 
            className="object-cover h-64 w-full"
          />
        </div>

        <div className="ml-6 z-10 w-full">
          <h3 className="text-black text-2xl font-bold mt-2">{item.name}</h3>
          <p className="text-gray-700 mt-2 overflow-hidden max-w-max pr-4 flex">
            {item.description}
          </p>
        </div>
      </div>

      <div className="relative flex justify-center bg-pink-300 h-12 font-bold z-0 shadow-md -mt-20 w-full">
        {['Overview', 'Characters', 'Staff', 'Reviews', 'Stats', 'Social'].map((section) => (
          <button 
            key={section} 
            type="button" 
            className="navBut mx-2 mt-2"
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </button>
        ))}
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
            <div className="details p-4">
              <div>DETAILS</div>
              <div>Genres, Episodes, Year
                {item.type}, {item.likes}
              </div>
            </div>
          </div>

          <div className="border border-black rounded w-52 h-52 mt-2 mb-2">
            <div className="details p-4">
              <div>AvgRatingTable</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col h-full w-full">
          {currentSection === 'Overview' && (
            <>
              <div className="h-full w-full">
                <div className="ml-5">
                  <h4>Characters</h4>
                </div>
                <br />
                {/* Character Grid */}
                <div className="mb-4 grid grid-cols-2 grid-rows-3 gap-4 ml-4">
                  {characters.map((character, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded">
                      {character.name}
                    </div>
                  ))}
                </div>
                <div className="ml-4 text-right mb-2">
                <a 
                  href="#" 
                  className="text-blue-500 no-underline cursor-pointer"
                  onClick={() => setCurrentSection('Characters')}
                >
                  View More...
                </a>
                </div>
                <div className="border-b ml-4"></div>
              </div>

              <div className="h-full w-full pt-3">
                <div className="ml-5">
                  <h4>Staff</h4>
                </div>
                <br />
                {/* Staff Grid */}
                <div className="ml-5 mb-4 grid grid-cols-3 gap-4">
                  {staff.map((staff, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded">
                      {staff.name}
                    </div>
                  ))}
                </div>
                <div className="ml-4 text-right mb-2">
                <a 
                  href="#" 
                  className="text-blue-500 no-underline cursor-pointer"
                  onClick={() => setCurrentSection('Staff')}
                >
                  View More...
                </a>
                </div>
                <div className="border-b ml-4"></div>
              </div>

              <div className="h-full w-full pt-3">
                <div className="ml-5">
                  <h4>Reviews</h4>
                </div>
                <br />
                <div className="ml-5 flex p-4 rounded-lg border">
                  <img className="w-16 h-16 border-1" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt="User" />
                  <div className="ml-4">
                    <div className="text-l font-bold">Username</div>
                    <div className="mt-2 text-gray-700">
                      Bu bir yorumdur.
                    </div>
                  </div>              
                </div>
                <div className="ml-4 text-right mb-2">
                <a 
                  href="#" 
                  className="text-blue-500 no-underline cursor-pointer pt-2"
                  onClick={() => setCurrentSection('Reviews')}
                >
                  View More...
                </a>
                </div>
                <div className="border-b ml-4"></div>
              </div>
            </>
          )}
          
          {currentSection === 'Characters' && (
            <div className="h-full w-full">
              <div className="ml-5">
                <h4>Characters</h4>
              </div>
              <br />
              {/* Character Grid */}
              <div className="mb-4 grid grid-cols-2 grid-rows-3 gap-4 ml-4">
                {characters.map((character, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded">
                    {character.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentSection === 'Staff' && (
            <div className="h-full w-full">
              <div className="ml-5">
                <h4>Staff</h4>
              </div>
              <br />
              {/* Staff Grid */}
              <div className="ml-5 mb-4 grid grid-cols-3 gap-4">
                {staff.map((staff, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded">
                    {staff.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentSection === 'Reviews' && (
            <div className="h-full w-full ">
              <div className="ml-5">
                <h4>Reviews</h4>
              </div>
              <br />
              <div className="ml-5 flex p-4 rounded-lg border">
                <img className="w-16 h-16 border-1" src="https://m.media-amazon.com/images/I/51Inoohb2tL._AC_UF1000,1000_QL80_.jpg" alt="User" />
                <div className="ml-4">
                  <div className="text-l font-bold">Username</div>
                  <div className="mt-2 text-gray-700">
                    Bu bir yorumdur.
                  </div>
                </div>              
              </div>
            </div>
          )}

          {currentSection === 'Stats' && (
            <div className="h-full w-full">
              <div className="ml-5">
                <h4>Stats</h4>
              </div>
              {/* Add Stats content here */}
            </div>
          )}

          {currentSection === 'Social' && (
            <div className="h-full w-full">
              <div className="ml-5">
                <h4>Social</h4>
              </div>
              {/* Add Social content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
