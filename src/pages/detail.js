import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/movieData.json';
import charData from '../assets/characterData.json';
import staffData from '../assets/staffData.json';
import Rating from '../rating.js';
import AddReviews from '../review.js';
import { FaHeart } from 'react-icons/fa';
import Dropdown from '../dropdown.js';

function Details() {
  const [currentSection, setCurrentSection] = useState('Overview');
  const { name } = useParams();
  const decodedName = decodeURIComponent(name); 
  const item = data.find(item => item.name === decodedName);

  if (!item) {
    return <div>Item not found</div>;
  }

  // Character List
  const charShow = charData.filter(character => character.charShow.trim() === item.name.trim())
    .map(character => {
      const staff = staffData.find(staff => staff.staffName.trim() === character.charStaff.trim());
      return {
        ...character,
        charStaff: staff ? staff.staffName : "", // Karakterin VA'sı ile eşleşen staffName
        staffImgSrc: staff ? staff.staffImgSrc : "" 
      };
    });

  // Staff List
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
    <div className="bg-gray-50 min-h-screen font-IndieFlower text-lg">
      {/* background */}
      <div className="relative blur-sm">
        <img 
          src={item.imgSrc}
          alt="Background" 
          className="w-full absolute top-0 left-0 z-0 h-60 object-cover brightness-75" 
        />
      </div>

      {/* profilePic */}
      <div className="relative flex items-start mt-10">
        <div className="bg-gray-200 w-56 h-64 relative overflow-hidden ml-10 z-10 hover:scale-105 border rounded-md">
          <img 
            src={item.imgSrc}
            alt="Profile" 
            className="object-cover h-64 w-full"
          />
        </div>

        <div className="ml-6 z-10 w-full">
          <h3 className="text-slate-200 text-4xl font-extrabold mt-2 inline-block bg-indigo-950 bg-opacity-75 p-1 rounded">
            {item.name}
          </h3>
          <p className="text-slate-100 mt-2 overflow-hidden max-w-max pr-4 text-xl flex bg-indigo-950 bg-opacity-75 p-1 rounded">
            {item.description}
          </p>
        </div>
      </div>

      <div className="relative flex justify-center bg-sky-700 h-12 font-bold z-0 shadow-md -mt-20 w-full">
        {Object.keys(sections).map((section) => (
          <button 
            key={section} 
            type="button" 
            className="navBut mx-2 mt-2 text-slate-200 hover:text-slate-300 "
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
  <div className="h-full w-full ml-2">
    <div className="ml-5 mt-2">
      <h4 className='font-semibold mt-3 -mb-3'>{title}</h4>
    </div>
    <br />
    <div className="mb-4 ml-4 flex flex-wrap gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded flex items-center w-80 space-x-4 cursor-pointer shadow-sm">
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
                <div className='text-gray-500'>{item.charName}'s VA</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="ml-4 text-right mb-2">
      <a 
        href="#" 
        className="text-blue-500 no-underline cursor-pointer font-semibold hover:text-blue-900"
        onClick={() => setCurrentSection(title)}
      >
        View More...
      </a>
    </div>
    <div className="border-b ml-4"></div>
  </div>
);

{/* Reviews */}
const Reviews = ({setCurrentSection }) => (
  <div className="h-full w-full mt-2 mb-4 ml-2 mr-2">
    <div className="ml-4">
      <h4 className='font-semibold mt-3 -mb-3'>Reviews</h4>
    </div>
    <br />
    <AddReviews />
    <div className="ml-4 text-right mt-2">
      <a 
        href="#" 
        className="text-blue-500 no-underline cursor-pointer pt-2 font-semibold hover:text-blue-900"
        onClick={() => setCurrentSection('Reviews')}
      >
        View More...
      </a>
    </div>
  </div>
);

const Stats = () => (
  <div className="h-full w-full ml-2">
    <div className="ml-5">
      <h4 className='font-semibold mt-3 -mb-3'>Stats</h4>
    </div>
    {/* Add Stats content here */}
  </div>
);

const Social = () => (
  <div className="h-full w-full ml-2">
    <div className="ml-5">
      <h4 className='font-semibold mt-3 -mb-3'>Social</h4>
    </div>
    {/* Add Social content here */}
  </div>
);

const Sidebar = ({ item }) => (
  <div className="flex flex-col items-center pt-4 h-full">
    {/* Add List, Fav, Rating Buttons */}
    <div className="flex">
      <Dropdown/>
      <button
        className="ml-2 relative inline-flex items-center justify-center w-10 h-10 bg-red-900 text-white rounded-lg text-xs shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-950"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <FaHeart aria-hidden="true" />
        </span>
      </button>

    </div>

    <div className="mt-4">
      <Rating/>
    </div>

    {/* Details */}
    <div className="border border-black rounded w-52 h-56 -mt-4 bg-white">
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

    <div className="border border-black rounded w-52 h-52 mt-2 mb-2 bg-white">
      <div className="details p-4">
        <div>AvgRatingTable</div>
      </div>
    </div>
  </div>
);

export default Details;
