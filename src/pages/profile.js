import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile(){
    const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/profile');
  };
}


export default UserProfile;