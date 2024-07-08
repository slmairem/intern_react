import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="leftSide">
        <Link to="/">
          <img src='https://cdn.pixabay.com/photo/2016/10/02/00/53/a-1708752_1280.png' className="h-10" alt="Logo"/>
        </Link>
      </div>
      <div className="middleSide flex space-x-4">
        <Link to="/profile" className="text-white no-underline">Profile</Link>
        <Link to="/animation" className="text-white no-underline">Animations</Link>
        <Link to="/lists" className="text-white no-underline">Lists</Link>
        <Link to="/forum" className="text-white no-underline">Forum</Link>
        <Link to="/news" className="text-white no-underline">News</Link>
      </div>
      <div className="rightSide flex space-x-4">
        <FaSearch className="cursor-pointer" onClick={toggleSearch} />
        <Link to="/login" className="text-white no-underline">Login</Link>
        <Link to="/register" className="text-white no-underline">Register</Link>
      </div>

      {searchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={toggleSearch}>
          <div className="bg-white p-5 rounded" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Search..." className="w-72 p-2 border text-black border-gray-300 rounded"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
