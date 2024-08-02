import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

const Search = ({ searchOpen, searchTerm, handleInputChange, results, toggleSearch, searchRef, closeSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!searchOpen) return null;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const filteredResults = selectedCategory === 'all'
    ? Object.values(results).flat()
    : results[selectedCategory] || [];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20" onClick={toggleSearch} ref={searchRef}>
      <div className="bg-white p-5 rounded max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center mb-2">
          <div className="relative mr-2">
            <button
              className="flex items-center text-black bg-gray-200 px-3 py-1 rounded border border-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedCategory === 'all'
                ? 'All'
                : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              <FaCaretDown className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-300 rounded text-black shadow-lg">
                <button onClick={() => handleCategoryChange('all')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">All</button>
                <button onClick={() => handleCategoryChange('movies')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">Movies</button>
                <button onClick={() => handleCategoryChange('characters')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">Characters</button>
                <button onClick={() => handleCategoryChange('staff')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">Staff</button>
                <button onClick={() => handleCategoryChange('users')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">Users</button>
                
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full p-2 border text-black border-gray-300 rounded"
          />
        </div>

        <div className="mt-2">
          {searchTerm.length >= 3 && (
            <div className="flex flex-wrap">
              {filteredResults.length > 0 && (
                <div className="flex-1 min-w-[200px] mt-2 text-black no-underline">
                  <h3 className="font-bold">
                    {selectedCategory === 'all'
                      ? 'All Results'
                      : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                  </h3>
                  {filteredResults.map(item => (
                    <li key={item.id || item.staffId || item.charId} className="text-black flex items-center mb-2 no-underline mr-10">
                      {item.profileImg && <img src={item.profileImg} alt={item.username} className="h-14 w-10 mr-2" />}
                      {item.imgSrc && <img src={item.imgSrc} alt={item.name || item.charName} className="h-14 w-10 mr-2" />}
                      {item.staffImgSrc && <img src={item.staffImgSrc} alt={item.staffName} className="h-14 w-10 mr-2" />}
                      <Link 
                        to={
                          item.name ? `/detail/${encodeURIComponent(item.name)}` : 
                          item.charName ? `/detail/${encodeURIComponent(item.charName)}` : 
                          item.staffName ? `/detail/${encodeURIComponent(item.staffName)}` : 
                          `/detail/${item.id || item.staffId || item.charId}`
                        } 
                        onClick={closeSearch} 
                        className="text-black no-underline"
                      >
                        {item.name || item.username || item.staffName || item.charName}
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
