import React from 'react';
import { useNavigate } from 'react-router-dom';

function Forum(){
    const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/forum');
  };
}


export default Forum;