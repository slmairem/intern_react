import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className='profile'>
      <div className='top'>
        <div className='relative pt-40 pb-24'>
          <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=sph" alt="backImg" className="w-full absolute top-0 left-0 z-0 h-60" />

          <div class="flex items-start absolute">
          <div class="bg-gray-200 w-32 h-32 relative overflow-hidden ml-10 mt-5">
            <img src="https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg" alt="profilePic" class="object-cover w-32 h-32"></img>
          </div>
          <div class="ml-4 text-black pt-30">
            <h3 class="text-xl font-bold ">Username</h3>
          </div>
          <div class="ml-4 mt-10">
            <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Follow</button>
          </div>
        </div>
        
        </div>
  
        

        <div className=' w-full flex justify-center bg-pink-300 h-10  z-10'>
            <button type="button" className="navBut mx-2">Profile</button>
            <button type="button" className="navBut mx-2">Lists</button>
            <button type="button" className="navBut mx-2">Stats</button>
            <button type="button" className="navBut mx-2">Journal</button>
        </div>
      </div>

      <div className='bottom'>
        <div className='leftWing'>
          <div className=''>
            Pronouns:
            Last Online:
            Joined:
          </div>
          <div className='bio'>
            Biography panel, can use BBcode
          </div>
          <div className='friends'>
            Friends' profilePic with square format
          </div>
        </div>
        <div className='rightWing'>
          <div className='statistics'>
            <div className='series'>
              <div className='seriesLeft'>
                <div className='serLeftLeft'>
                  Watching
                  Completed
                  On-hold
                  Dropped
                  Plan to Watch
                </div>
                <div className='serLeftRight'>
                  Total Entries
                  Rewatched
                  Episodes
                </div>
              </div>
              <div className='seriesRight'>
                <div className='seriesDetails'>
                  image, name, status, score, update_date
                </div>
              </div>
            </div>
          </div>
          <div className='commentSec'>
            Comment section, BBcode included, can be made private
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
