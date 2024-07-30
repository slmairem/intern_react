import React from 'react';

const ItemCard = ({ item, onClick }) => {
  return (
    <div 
      key={item.id} 
      className="flex p-4 rounded-lg border mb-3 shadow-md cursor-pointer hover:shadow-lg"
      onClick={() => onClick(item.name)}
    >
      <img 
        className="w-16 h-20 border-1 shadow-lg" 
        src={item.imgSrc} 
        alt={item.name} 
      />
      <div className="ml-4">
        <div className="text-xl font-bold">{item.name}</div>
        <span className="flex mt-2 text-sm">Likes: {item.likes}</span>
        <div className="mt-2 text-gray-500">{item.description}</div>
      </div>
    </div>
  );
};

export default ItemCard;
