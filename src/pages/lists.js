import React from 'react';

function Lists(){
  
  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">News</div>
        <button type="button" className="bg-gray-700 text-white px-4 py-2 rounded mr-2">
          Make your own lists.
        </button>
      </div>
      
      <div className='middle'>
        <div className='font-semibold	'>Popular This Week</div>
        <div>
          <div></div>
          <div>List Name</div>
          <div>Username</div>
          <div>Like and Comment Rates</div>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottomLeft'>
          <div>Recently Likes || Yan yana bilgiler</div>
          <div>List image</div>
          <div>List Name</div>
          <div>Username</div>
          <div>List Descrip</div>
          <div>Like and Comment Rates</div>
        </div>
        <div className='bottomRight'>
          <div>Most Likes || Bilgiler alt alta</div>
          <div>List image</div>
          <div>List Name</div>
          <div>Username</div>
        </div>
      </div>
  </div>
  );
}

export default Lists;