import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Search = ({ searchOpen, searchTerm, handleInputChange, results, toggleSearch, searchRef, closeSearch, handleItemClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!searchOpen) return null;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const filteredResults = selectedCategory === 'all'
    ? {
        movies: results.movies.length > 0 ? results.movies : null,
        characters: results.characters.length > 0 ? results.characters : null,
        staff: results.staff.length > 0 ? results.staff : null,    
        users: results.users.length > 0 ? results.users : null
      }
    : { [selectedCategory]: results[selectedCategory] || [] };

  const onItemClick = (category, name) => {
    if (category !== 'characters' && category !== 'staff') {
      handleItemClick(name); 
    }
    closeSearch(); 
  };

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
              {Object.keys(filteredResults).map(category => (
                filteredResults[category] && (
                  <div key={category} className="flex-1 min-w-[200px] mt-2 text-black">
                    <h3 className="font-bold">
                      {selectedCategory === 'all'
                        ? category.charAt(0).toUpperCase() + category.slice(1)
                        : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                    </h3>
                    {filteredResults[category].map(item => (
                      <li key={item.id || item.staffId || item.charId} className={`text-black flex items-center mb-2 mr-10 ${category === 'characters' || category === 'staff' ? 'cursor-pointer' : 'cursor-pointer'}`}>
                        {category === 'movies' && item.imgSrc && (
                          <img
                            src={item.imgSrc}
                            alt={item.name}
                            className="h-14 w-10 mr-2"
                          />
                        )}
                        {category === 'characters' && item.charImgSrc && (
                          <img
                            src={item.charImgSrc}
                            alt={item.charName}
                            className="h-14 w-10 mr-2"
                          />
                        )}
                        {category === 'staff' && item.staffImgSrc && (
                          <img
                            src={item.staffImgSrc}
                            alt={item.charStaffName}
                            className="h-14 w-10 mr-2"
                          />
                        )}
                        {category === 'users' && item.profileImg && (
                          <img
                            src={item.profileImg}
                            alt={item.username}
                            className="h-14 w-10 mr-2"
                          />
                        )}
                        <button 
                          onClick={() => category !== 'characters' && category !== 'staff' && onItemClick(category, 
                            category === 'movies' ? item.name :
                            category === 'characters' ? item.charName :
                            category === 'staff' ? item.charStaffName :
                            category === 'users' ? item.username :
                            item.name || item.username || item.charName || item.charStaffName)}
                          className="text-black no-underline"
                        >
                          {category === 'movies' ? item.name :
                           category === 'characters' ? item.charName :
                           category === 'staff' ? item.charStaffName :
                           category === 'users' ? item.username :
                           item.name || item.username || item.charName || item.charStaffName}
                        </button>
                      </li>
                    ))}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
