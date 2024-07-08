import React from 'react';
import { useNavigate } from 'react-router-dom';

function Details(){
    const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/detail');
  };
}


export default Details;