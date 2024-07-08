import React from 'react';
import { useNavigate } from 'react-router-dom';

function Animation(){
    const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/animation');
  };

  return (
    <div>
        denemeww
    </div>
  );
}


export default Animation;