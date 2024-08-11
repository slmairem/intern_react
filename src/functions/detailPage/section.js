import React from 'react';

const Section = ({ title, items, setCurrentSection, currentSection }) => {
  const displayedItems = currentSection === 'Overview' ? items.slice(0, 4) : items;

  return (
    <div className="h-full w-full ml-2">
      <div className="ml-5 mt-2">
        <h4 className='font-semibold mt-3 -mb-3'>{title}</h4>
      </div>
      <br />
      <div className="mb-4 ml-4 flex flex-wrap gap-4">
        {displayedItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded flex items-center w-80 space-x-4 cursor-pointer shadow-sm">
            {title === 'Characters' && (
              <div className="flex items-center">
                <img src={item.charImgSrc} alt={item.charName} className="w-16 h-20 mr-4" />
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

      {currentSection === 'Overview' && (
        <div className="ml-4 text-right mb-2">
          <a 
            href="#" 
            className="text-blue-500 no-underline cursor-pointer font-semibold hover:text-blue-900"
            onClick={() => setCurrentSection(title)}
          >
            View More...
          </a>
        </div>
      )}
      <div className="border-b ml-4"></div>
    </div>
  );
};

export default Section;
