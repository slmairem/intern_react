import React from 'react';


function News(){

  return (
    <div>
        <div className='sectionbar'>
          <div>Submit News</div>
          <div>All</div>
          <div>Series</div>
          <div>Movies</div>
          <div>People</div>
          <div>Events</div>
          <div>Search News</div>
        </div>
        <div className='newS'>
          <div className='containers'>
            <div><img src=''></img></div>
            <div><h1>Başlık</h1></div>
            <div><a>Açıklama</a></div>
            <div><a>**Yayınlanan tarih** by **kullanıcı adı** toplam yorum sayısı **haber tagleri**</a></div>
          </div>

        </div>
    </div>
  );
}


export default News;