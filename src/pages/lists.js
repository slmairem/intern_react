import React, { useEffect } from 'react';
import movieData from '../assets/movieData.json';
import userData from '../assets/userData.json'; 
import Placeholder from '../functions/listsPage/placeholder';
import ImageGrid from '../functions/listsPage/imageGrid';
import ListCard from '../functions/listsPage/listCard';

const getMovieImages = (movieIds) => {
  return movieData
    .filter(movie => movieIds.includes(movie.id))
    .map(movie => movie.imgSrc);
};

const extractListsFromUserData = (userData) => {
  return userData.flatMap(user => 
    user.publishedLists.map(list => ({
      ...list,
      publishUser: user.username
    }))
  );
};

const getSortedPopularLists = (lists) => {
  return [...lists].sort((a, b) => b.popularity - a.popularity);
};

const getSortedUserFavorites = (lists) => {
  return [...lists].sort((a, b) => b.likes - a.likes);
};

function Lists() {
  const allLists = extractListsFromUserData(userData);
  const popularLists = getSortedPopularLists(allLists);
  const userFavorites = getSortedUserFavorites(allLists);

  return (
    <div className='container mx-auto p-4 font-IndieFlower'>
      <div className="sections mb-4">
        <div className="pageName text-2xl font-bold">Lists</div>
      </div>
      
      <div className='middle'>
        <div className='font-semibold text-lg mb-2'>Popular This Week</div>
        <div className='grid grid-cols-3 grid-rows-2'>
          {popularLists.map((list) => (
            <ImageGrid
              key={list.listId}
              images={getMovieImages(list.movies)}
              listName={list.listName}
              username={list.publishUser}
              likes={list.likes}
              comments={list.comments}
            />
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="w-3/4 p-4">
          <div className='font-semibold text-lg mb-2'>Recently Updated</div>
          <div className='grid grid-cols-2 gap-4'>
            {userFavorites.map((list) => (
              <ListCard
                key={list.listId}
                images={getMovieImages(list.movies)}
                listName={list.listName}
                username={list.publishUser}
                description={list.description}
                likes={list.likes}
              />
            ))}
          </div>
        </div>

        <div className="w-1/4 p-4 border-l">
          <div className="font-semibold text-lg mb-2">Users Favourite</div>
          {userFavorites.map((list) => {
            const images = getMovieImages(list.movies);
            const placeholderCount = 4 - images.length;

            return (
              <div key={list.listId} className="flex flex-col items-start p-4 rounded-lg border shadow-md hover:shadow-lg mb-4 cursor-pointer">
                <div className="flex flex-shrink-0 -space-x-4 mb-4">
                  {images.map((src, index) => (
                    <img key={index} className="w-16 h-24 rounded border-1 shadow-lg" src={src} alt="" />
                  ))}
                  {Array.from({ length: placeholderCount }).map((_, index) => (
                    <Placeholder key={index} size="w-16 h-24 rounded" />
                  ))}
                </div>
                <div className="w-full overflow-hidden">
                  <div className="text-xl font-bold truncate">{list.listName}</div>
                  <div className="flex items-center mt-2 text-gray-400">
                    <span className="text-sm truncate">{list.publishUser}</span>
                    <span className="ml-2 text-sm truncate">Likes: {list.likes}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lists;
