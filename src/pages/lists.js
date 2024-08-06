import React, { useEffect } from 'react';
import movieData from '../assets/movieData.json';
import userData from '../assets/userData.json'; 

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

const Placeholder = ({ size }) => (
  <div className={`bg-gray-300 border border-gray-400 shadow-md ${size}`}></div>
);

const ImageGrid = ({ images, listName, username, likes, comments }) => {
  const placeholderCount = Math.max(0, 4 - images.length);
  return (
    <div className='p-4 rounded-lg border shadow-md hover:shadow-lg mb-4 mr-4 cursor-pointer'>
      <div className="flex -space-x-4">
        {images.map((src, index) => (
          <img key={index} className="w-24 h-32 border-1 shadow-lg" src={src} alt="" />
        ))}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <Placeholder key={index} size="w-24 h-32" />
        ))}
      </div>
      <div className="mt-2 text-xl font-bold text-gray-900">{listName}</div>
      <div className="flex items-center justify-between mt-1 text-gray-400">
        <span className="text-sm">{username}</span>
        <div className="flex space-x-4">
          <span className="text-sm">Likes: {likes}</span>
          <span className="text-sm">Comments: {comments}</span>
        </div>
      </div>
    </div>
  );
};

const ListCard = ({ images, listName, username, description, likes }) => {
  const placeholderCount = Math.max(0, 4 - images.length);
  return (
    <div className="flex items-start p-4 rounded-lg border shadow-md hover:shadow-lg cursor-pointer">
      <div className="flex-shrink-0 flex -space-x-4">
        {images.map((src, index) => (
          <img key={index} className="w-16 h-24 border-1 shadow-lg" src={src} alt="" />
        ))}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <Placeholder key={index} size="w-16 h-24" />
        ))}
      </div>
      <div className="ml-4">
        <div className="text-xl font-bold">{listName}</div>
        <div className="flex items-center mt-2 text-gray-500">
          <span className="text-sm">{username}</span>
          <span className="ml-2 text-sm">Likes: {likes}</span>
        </div>
        <div className="mt-2 text-gray-400">{description}</div>
      </div>
    </div>
  );
};

function Lists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                    <img key={index} className="w-16 h-24 border-1 shadow-lg" src={src} alt="" />
                  ))}
                  {Array.from({ length: placeholderCount }).map((_, index) => (
                    <Placeholder key={index} size="w-16 h-24" />
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
