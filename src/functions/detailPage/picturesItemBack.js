import React from 'react';
import DetailsSidebar from './detailsSideBar.js';

const DetailsContent = ({ item, sections, currentSection, setCurrentSection, showFullImage, setShowFullImage }) => (
  <div className="bg-gray-50 min-h-screen font-IndieFlower text-lg">
    {/* profilePic */}
    <div className="relative flex items-start mt-10">
      <div 
        className="bg-gray-200 w-56 h-64 relative overflow-hidden ml-10 z-10 hover:scale-105 border rounded-md cursor-pointer"
        onClick={() => setShowFullImage(item.imgSrc)}
      >
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
      <DetailsSidebar item={item} />
      <div className="flex flex-col h-full w-full">
        {sections[currentSection]}
      </div>
    </div>

    {/* Fullscreen Image */}
    {showFullImage && (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowFullImage(null)}>
        <img
          src={showFullImage}
          alt="Fullscreen"
          className="max-w-full max-h-full cursor-pointer"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    )}
  </div>
);

export default DetailsContent;
