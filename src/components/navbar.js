import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import data from '../assets/movieData.json';
import staffData from '../assets/staffData.json';
import usersData from '../assets/userData.json'; 

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const closeSearch = () => setSearchOpen(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchTerm(''); // Clear search term when opening/closing
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterResults = (term) => {
    const lowerTerm = term.toLowerCase();
    const movieMatches = data.filter(item => item.name.toLowerCase().includes(lowerTerm));
    const staffMatches = staffData.filter(item => item.staffName.toLowerCase().includes(lowerTerm));
    const userMatches = usersData.filter(item => item.username.toLowerCase().includes(lowerTerm));

    return {
      movies: movieMatches,
      staff: staffMatches,
      users: userMatches,
    };
  };

  const results = filterResults(searchTerm);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="leftSide">
        <Link to="/">
          <img src='https://cdn.pixabay.com/photo/2016/10/02/00/53/a-1708752_1280.png' className="h-10" alt="Logo" />
        </Link>
      </div>
      <div className="middleSide flex space-x-4">
        <Link to="/profile" className="text-white no-underline">Profile</Link>
        <Link to="/animation" className="text-white no-underline pr-4 border-r border-gray-400">Animations</Link>
        <Link to="/lists" className="text-white no-underline pr-4 border-r border-gray-400">Lists</Link>
        <Link to="/forum" className="text-white no-underline pr-4 border-r border-gray-400">Forum</Link>
        <Link to="/news" className="text-white no-underline">News</Link>
      </div>
      <div className="rightSide flex space-x-4">
        <FaSearch className="cursor-pointer" onClick={toggleSearch} />
        <Link to="/login" className="text-white no-underline">Login</Link>
        <Link to="/register" className="text-white no-underline">Register</Link>
      </div>

      {searchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20"
          onClick={toggleSearch}>
          <div className="bg-white p-5 rounded" onClick={(e) => e.stopPropagation()}>
            <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
              className="w-72 p-2 border text-black border-gray-300 rounded"
            />
            </div>

            <div className="mt-4">
              {searchTerm.length >= 3 && (
                <div className="flex space-x-4">
                  {Object.keys(results).map(category => (
                    results[category].length > 0 && (
                      <div key={category} className="mt-2 text-black">
                        <h3 className="font-bold">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        <ul>
                          {results[category].map(item => (
                            <li key={item.id} className="text-black flex items-center mr-10 mb-2">
                              {item.profileImg && <img src={item.profileImg} alt={item.username} className="h-10 w-10 mr-2" />}
                              {item.imgSrc && <img src={item.imgSrc} alt={item.name} className="h-10 w-10 mr-2" />}
                              {item.staffImg && <img src={item.staffImg} alt={item.staffName} className="h-10 w-10 mr-2" />}
                              <Link to={`/detail/${item.id}`} onClick={closeSearch}>
                                {item.name || item.username || item.newsName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>


          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
