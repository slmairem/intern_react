import React from 'react';

const FriendList = ({ friends, userData, handleFriendClick }) => {
  return (
    <div className='bg-gradient-to-br from-sky-500 to-sky-300 p-4 rounded'>
      <div className="mb-2 font-semibold font-lg">Friends</div>
      <div className='grid grid-cols-4'>
        {friends ? friends.slice(0, 8).map((friendName, index) => {
          const friend = userData.find(u => u.username === friendName);
          if (friend) {
            return (
              <div key={index} className="flex items-center justify-center">
                <div 
                  className="cursor-pointer" 
                  onClick={() => handleFriendClick(friend.userId)}
                >
                  <img
                    src={friend.profileImg}
                    alt={`Friend ${index + 1}`}
                    className="w-16 h-16 border rounded mb-2"
                  />
                </div>
              </div>
            );
          }
          return (
            <div key={index} className="w-16 h-16 rounded-full"></div>
          );
        }) : new Array(6).fill("").map((_, index) => (
          <div key={index} className="w-16 h-16 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
