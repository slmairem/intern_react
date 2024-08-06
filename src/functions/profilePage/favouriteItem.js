import React from 'react';

const FavouriteItem = ({ imgSrc, name, onClick, isClickable }) => (
  <div
    className={`flex items-center p-4 bg-gradient-to-br from-slate-50 to-slate-200 rounded-lg mb-2 ${isClickable ? 'cursor-pointer hover:shadow-md' : 'cursor-pointer'}`}
    onClick={isClickable ? onClick : undefined}
  >
    <img src={imgSrc || 'default-image.png'} alt={name} className="w-12 h-16 object-cover rounded mr-4" />
    <p className="text-lg font-semibold mt-3 truncate">{name}</p>
  </div>
);

export default FavouriteItem;
