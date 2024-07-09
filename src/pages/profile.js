import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className='profile'>
      <div className='pb-15'>
        <div className='relative pt-40 '>
          <div><img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=sph" alt="backImg" className="w-full absolute top-0 left-0 z-0 h-60" /></div>
        </div>
        
        <div class="relative flex items-start">
          <div class="bg-gray-200 w-32 h-32 relative overflow-hidden ml-10 mt-5">
            <div><img src="https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg" alt="profilePic" class="object-cover w-32 h-32"></img></div>
          </div>
          <div class="ml-4 mt-10 ">
            <div><h3 class="text-black mt-18 text-xl font-bold mt-2">Username</h3></div>
          </div>
          <div class="ml-4 mt-10">
            <div><button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Follow</button></div>
          </div>
        </div>             
        
        <div className='static w-full flex justify-center bg-pink-300 h-10  font-bold'>
            <div><button type="button" className="navBut mx-2">Profile</button></div>
            <div><button type="button" className="navBut mx-2">Lists</button></div>
            <div><button type="button" className="navBut mx-2">Stats</button></div>
            <div><button type="button" className="navBut mx-2">Journal</button></div>
        </div>
      </div>

      <div className='flex'>
        <div className='w-1/4 p-4'>
          <div className='mb-4'>
            <div class="mb-2">Pronouns:</div>
            <div class="mb-2">Last Online:</div>
            <div class="mb-2">Joined:</div>
          </div>
          <div className='p-4 rounded mb-4 bg-pink-300'>
            <div class="flex justify-between items-center">
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <button class="bg-pink-500 text-xs px-2 py-1 rounded">Edit</button>
            </div>
          </div>
          <div className='bg-pink-300 p-4 rounded'>
              <div class="mb-2">Friends</div>
          </div>
        </div>

        <div className='w-3/4 p-4'>
          <div className='bg-pink-300 p-4 rounded mb-4'>
            <div className='mb-2 font-semibold' >Series</div>
            <div className='flex mb-4'>
              
              <div className='w-1/4'>
                <div className='mb-2'>Watching</div>
                <div className='mb-2'>Completed</div>
                <div className='mb-2'>On-hold</div>
                <div className='mb-2'>Dropped</div>
                <div className='mb-2'>Plan to Watch</div>
              </div>
              <div className='w-1/4'>
                <div className='mb-2'>Total Entries</div>
                <div className='mb-2'>Rewatched</div>
                <div className='mb-2'>Episodes</div>
              </div>
          
              <div className='grid grid-cols-1 gap-4 w-2/4'>
                <div className="flex items-center bg-gray-700 p-2 rounded">
                  <div className="flex-shrink-0 mr-4">
                    <img src='' className="w-16 h-16 rounded-full" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between">
                      <h2 className="text-white text-lg font-semibold">Series Name</h2>
                      <span className="text-gray-400 text-sm">Update Date</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex-grow h-2 bg-gray-600 rounded-full overflow-hidden">
                        <div className={`h-full bg-blue-500 rounded-full`} style={{ width: `%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-gray-400 text-sm">
                      <span>100 % watched</span>
                      <span>Score:</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-pink-300 p-4 rounded mb-4'>
            <div className='mb-2 font-semibold'>Movies</div>
            <div className='flex mb-4'>
              
              <div className='w-1/4'>
                <div className='mb-2'>Completed</div>
                <div className='mb-2'>Dropped</div>
                <div className='mb-2'>Plan to Watch</div>
              </div>
              <div className='w-1/4'>
                <div className='mb-2'>Total Entries</div>
                <div className='mb-2'>Rewatched</div>
                <div className='mb-2'>Episodes</div>
              </div>
          
              <div className='grid grid-cols-1 gap-4 w-2/4'>
                <div className="flex items-center bg-gray-700 p-2 rounded">
                  <div className="flex-shrink-0 mr-4">
                    <img src='' className="w-16 h-16 rounded-full" />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between">
                      <h2 className="text-white text-lg font-semibold">Series Name</h2>
                      <span className="text-gray-400 text-sm">Update Date</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex-grow h-2 bg-gray-600 rounded-full overflow-hidden">
                        <div className={`h-full bg-blue-500 rounded-full`} style={{ width: `%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-gray-400 text-sm">
                      <span>100 % watched</span>
                      <span>Score:</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="mx-auto px-4 bg-blue-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mt-5">Comments</h2>
          </div>
            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea
                  id="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-blue-500 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Profile;
