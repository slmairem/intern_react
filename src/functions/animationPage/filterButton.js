import React from 'react';

const FilterButton = ({ label, onClick }) => {
  const buttonClassName = 'relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-400 before:absolute before:bg-gray-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-400 after:absolute after:bg-gray-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]';

  return (
    <div className="navBut mx-2 mt-2">
      <button className={buttonClassName} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default FilterButton;
