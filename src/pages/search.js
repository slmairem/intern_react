import React from 'react';
import { useNavigate } from 'react-router-dom';

function SearchResults(){
    const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/search');
  };
}


export default SearchResults;