import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lists(){
    const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/lists');
  };
}


export default Lists;