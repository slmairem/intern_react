import React from 'react';

function Lists(){
  
  return (
    <div>
        <div className='top'>
          Sekme başlığı
          Liste oluşturma tuşu
        </div>
        <div className='middle'>
          Popular this Week Lists
          <div>
            <div>List img</div>
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