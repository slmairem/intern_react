import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lists(){
    const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/lists');
  };
  
  return (
    <div>
        denemew
    </div>
  );
}


export default Lists;