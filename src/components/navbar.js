import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FaSearch } from 'react-icons/fa';
// import Logo from '../assets/logo.png';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
        <img src='https://cdn.pixabay.com/photo/2016/10/02/00/53/a-1708752_1280.png'></img></Link>
      </div>
      <div className="middleSide">
        <Link to="/animations">Animations</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/news">News</Link>
      </div>
      <div className="rightSide">
        <FaSearch className="searchIcon" onClick={toggleSearch} />
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      {searchOpen && (
        <div className="searchPopup" onClick={toggleSearch}>
          <div className="searchContent" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
