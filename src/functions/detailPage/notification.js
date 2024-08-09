import React, { useState, useEffect } from 'react';

const Notification = ({ message, color, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 text-white rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${color}`} 
      onClick={onClose}
    >
      <p className='-mb-1'>{message}</p>
    </div>
  );
};


export default Notification;
