import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/movieData.json';
import charData from '../assets/characterData.json';
import staffData from '../assets/staffData.json';

function Details() {
  const [currentSection, setCurrentSection] = useState('Overview');
  const { id } = useParams();
  const item = data.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  // Character listesi
  const charShow = charData.filter(character => character.charShow.trim() === item.name.trim())
    .map(character => {
      const staff = staffData.find(staff => staff.staffName.trim() === character.charStaff.trim());
      return {
        ...character,
        charStaff: staff ? staff.staffName : "", // Karakterin VA'sı ile eşleşen staffName
        staffImgSrc: staff ? staff.staffImgSrc : "" 
      };
    });

  // Staff listesi
  const staffShow = staffData.filter(staff => staff.staffShow.trim() === item.name.trim())
    .map(staff => ({
      ...staff,
      charName: charData.find(character => character.charStaff.trim() === staff.staffName.trim()).charName // Staff'ın karakterin VA'sı ile eşleşmesi
    }));

  const sections = {
    Overview: (
      <>
        <Section title="Characters" items={charShow} setCurrentSection={setCurrentSection} />
        <Section title="Staff" items={staffShow} setCurrentSection={setCurrentSection} />
        <Reviews setCurrentSection={setCurrentSection} />
      </>
    ),
    Characters: (
      <Section title="Characters" items={charShow} setCurrentSection={setCurrentSection} />
    ),
    Staff: (
      <Section title="Staff" items={staffShow} setCurrentSection={setCurrentSection} />
    ),
    Reviews: <Reviews setCurrentSection={setCurrentSection} />,
    Stats: <Stats />,
    Social: <Social />
  };

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
        {Object.keys(sections).map((section) => (
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
        <Sidebar item={item} />
        <div className="flex flex-col h-full w-full">
          {sections[currentSection]}
        </div>
      </div>
    </div>
  );
}

const Section = ({ title, items, setCurrentSection }) => (
  
  <div className="h-full w-full">
    <div className="ml-5 mt-2">
      <h4>{title}</h4>
    </div>
    <br />
    <div className="mb-4 grid grid-cols-3 ml-4 ">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded flex items-center w-96 space-x-4 mb-4">
          {title === 'Characters' && (
            <div className="flex items-center">
              <img src={item.imgSrc} alt={item.charName} className="w-16 h-20 mr-4" />
              <div className="font-bold">{item.charName}</div>
            </div>
          )}
          {title === 'Staff' && (
            <div className="flex items-center">
              <img src={item.staffImgSrc} alt={item.staffName} className="w-16 h-20 mr-4" />
              <div>
                <div className="font-bold">{item.staffName}</div>
                <div className='text-gray-500'><span>{item.charName}'s VA </span></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="ml-4 text-right mb-2">
      <a 
        href="#" 
        className="text-blue-500 no-underline cursor-pointer"
        onClick={() => setCurrentSection(title)}
      >
        View More...
      </a>
    </div>
    <div className="border-b ml-4"></div>
  </div>
);

const Reviews = ({ setCurrentSection }) => (
  <div className="h-full w-full mt-2 mb-4">
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
    <div className="ml-4 text-right mt-2">
      <a 
        href="#" 
        className="text-blue-500 no-underline cursor-pointer pt-2 "
        onClick={() => setCurrentSection('Reviews')}
      >
        View More...
      </a>
    </div>

  </div>
);

const Staff = () => (
  <div className="h-full w-full">
    <div className="ml-5">
      <h4>Staff</h4>
    </div>
    {/* Add Staff content here */}
  </div>
);

const Stats = () => (
  <div className="h-full w-full">
    <div className="ml-5">
      <h4>Stats</h4>
    </div>
    {/* Add Stats content here */}
  </div>
);

const Social = () => (
  <div className="h-full w-full">
    <div className="ml-5">
      <h4>Social</h4>
    </div>
    {/* Add Social content here */}
  </div>
);

const Sidebar = ({ item }) => (
  <div className="flex flex-col items-center pt-3 h-full">
    <div className="flex">
      <button className="bg-blue-500 text-white px-4 py-2 mr-4 rounded w-36">AddList</button>
      <button className="bg-red-500 text-white rounded w-12">❤️</button>
    </div>

    <div className="mt-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-52">Rating</button>
    </div>

    <div className="border border-black rounded w-52 h-56 mt-2">
      <div className="details p-3">
        <div>
          <span className="inline-block font-bold">Year:</span> <span className="inline-block">{item.year}</span> <br/>
          <span className="inline-block font-bold">Genres:</span> <span className="inline-block">{item.genres}</span> <br/>
          {item.type === 'Series' && (
            <>
              <span className="inline-block font-bold">Episodes:</span> <span className="inline-block">{item.episodes}</span> <br/>
            </>
          )}
          <span className="inline-block font-bold">Duration:</span> <span className="inline-block">{item.duration}</span> <br/>
          <span className="inline-block font-bold">Likes:</span> <span className="inline-block">{item.likes}</span> 
        </div>
      </div>
    </div>

    <div className="border border-black rounded w-52 h-52 mt-2 mb-2">
      <div className="details p-4">
        <div>AvgRatingTable</div>
      </div>
    </div>
  </div>
);

export default Details;
