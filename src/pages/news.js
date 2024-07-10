import React from 'react';


function News(){

  return (
    <div className='container mx-auto p-4'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">News</div>
      </div>

      <div className='flex'>
        <div className="relative w-full flex justify-center  font-bold z-0 mb-2">
          <div><button type="button" className="navBut mx-2 mt-2">All</button></div>
          <div><button type="button" className="navBut mx-2 mt-2">Series</button></div>
          <div><button type="button" className="navBut mx-2 mt-2">Movies</button></div>
          <div><button type="button" className="navBut mx-2 mt-2">People</button></div>
          <div><button type="button" className="navBut mx-2 mt-2">Events</button></div>
        </div>

        <div className="bg-white rounded mx-2 mt-2 justify-end">
          <input type="text" placeholder="Search..." className="border text-black border-gray-300 rounded pl-2"/>
        </div>
      </div>
      
      <div className='grid grid-cols-3'>
        <div className="flex bg-white p-4 mr-3 rounded shadow-md">
          <div className="w-1/4">
            <img src="" alt="News Image" className="w-full h-auto rounded"/>
          </div>
          <div className="w-3/4 pl-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold truncate">Başlık</h2>
              <p className="text-gray-700 mt-2 line-clamp-3">Açıklama</p>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <p>**Yayınlanan tarih** by **kullanıcı adı** toplam yorum sayısı</p>
              <div className="mt-2">
                {/** Haber tagleri burada yer alacak, örneğin: **/}
                <button className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2">Series</button>
                <button className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2">People</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white p-4 mr-3 rounded shadow-md">
          <div className="w-1/4">
            <img src="" alt="News Image" className="w-full h-auto rounded"/>
          </div>
          <div className="w-3/4 pl-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold truncate">Başlık</h2>
              <p className="text-gray-700 mt-2 line-clamp-3">Açıklama</p>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <p>**Yayınlanan tarih** by **kullanıcı adı** toplam yorum sayısı</p>
              <div className="mt-2">
                {/** Haber tagleri burada yer alacak, örneğin: **/}
                <button className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2">Series</button>
                <button className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2">People</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white p-4 mr-3 rounded shadow-md">
          <div className="w-1/4">
            <img src="" alt="News Image" className="w-full h-auto rounded"/>
          </div>
          <div className="w-3/4 pl-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold truncate">Başlık</h2>
              <p className="text-gray-700 mt-2 line-clamp-3">Açıklama</p>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <p>**Yayınlanan tarih** by **kullanıcı adı** toplam yorum sayısı</p>
              <div className="mt-2">
                {/** Haber tagleri burada yer alacak, örneğin: **/}
                <button className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2">Series</button>
                <button className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded mr-2">People</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default News;