import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import data from '../assets/movieData.json';
import staffData from '../assets/staffData.json';
import usersData from '../assets/userData.json';
import charData from '../assets/characterData.json';
import Search from '../functions/navBar/search';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const navigate = useNavigate();

  const closeSearch = () => setSearchOpen(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchTerm(''); // Clear search when opening/closing
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterResults = (term) => {
    const lowerTerm = term.toLowerCase();
    const movieMatches = data.filter(item => item.name.toLowerCase().includes(lowerTerm));
    const staffMatches = staffData.filter(item => item.staffName.toLowerCase().includes(lowerTerm));
    const userMatches = usersData.filter(item => item.username.toLowerCase().includes(lowerTerm));
    const charMatches = charData.filter(item => item.charName.toLowerCase().includes(lowerTerm));

    return {
      movies: movieMatches,
      staff: staffMatches,
      users: userMatches,
      characters: charMatches,
    };
  };

  const results = filterResults(searchTerm);

  useEffect(() => {
    if (searchOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setUserDropdownOpen(false);
    setDropdownOpen(false);
  };

  const handleSignOut = () => {
    setSelectedUser(null);
    setDropdownOpen(false);
    setUserDropdownOpen(false);
    navigate('/');
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleUserDropdownToggle = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-b from-gray-900 to-indigo-950 text-white font-IndieFlower font-semibold text-lg">
      <div className="leftSide">
        <Link to="/">
          <img src='https://cdn.pixabay.com/photo/2016/10/02/00/53/a-1708752_1280.png' className="h-10 hover:scale-110 duration-500" alt="Logo" />
        </Link>
      </div>
      <div className="middleSide flex space-x-4">
        <Link to="/animation" className="text-slate-200 hover:text-slate-300 no-underline pr-4 border-r border-dotted border-gray-400">Animations</Link>
        <Link to="/lists" className="text-slate-200 hover:text-slate-300 no-underline pr-4 border-r border-dotted border-gray-400">Lists</Link>
        <Link to="/forum" className="text-slate-200 hover:text-slate-300 no-underline pr-4 border-r border-dotted border-gray-400">Forum</Link>
        <Link to="/news" className="text-slate-200 hover:text-slate-300 no-underline">News</Link>
      </div>

      <div className="rightSide flex items-center space-x-4">
        <FaSearch className="cursor-pointer" onClick={toggleSearch} />

        <div className="relative" ref={userDropdownRef}>
          <button className="flex items-center text-white" onClick={handleUserDropdownToggle}>
            {selectedUser ? (
              <>
                <img src={selectedUser.profileImg} alt={selectedUser.username} className="h-10 w-10 rounded mr-2" />
                <Link to={`/profile/${selectedUser.userId}`} className="text-slate-200 hover:text-slate-300 no-underline">
                  {selectedUser.username}
                </Link>
              </>
            ) : (
              <span className="text-slate-200 hover:text-slate-300">Select User</span>
            )}
          </button>
          {userDropdownOpen && !selectedUser && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20 max-h-48 overflow-y-auto">
              {usersData.map(user => (
                <button
                  key={user.userId}
                  onClick={() => handleUserSelect(user)}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  <img src={user.profileImg} alt={user.username} className="h-10 w-10 rounded mr-2" />
                  <span>{user.username}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedUser && (
          <div className="relative z-30" ref={dropdownRef}>
            <button className="flex items-center cursor-pointer z-30" onClick={handleDropdownToggle}>
              <FaCaretDown />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-30">
                <button onClick={handleSignOut} className="block px-4 py-2 w-full text-left rounded hover:bg-gray-200">Sign Out</button>
              </div>
            )}
          </div>
        )}

        {!selectedUser && (
          <>
            <Link to="/login" className="text-slate-200 hover:text-slate-300 no-underline">Login</Link>
            <Link to="/register" className="text-slate-200 hover:text-slate-300 no-underline">Register</Link>
          </>
        )}
      </div>

      <Search
        searchOpen={searchOpen}
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        results={results}
        toggleSearch={toggleSearch}
        searchRef={searchRef}
        closeSearch={closeSearch}
      />
    </div>
  );
}

export default Navbar;
