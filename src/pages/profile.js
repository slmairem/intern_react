import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import userData from '../assets/userData.json'; 

function Profile() {
  const { userId } = useParams(); 
  const profileRef = useRef(null);
  const backgroundRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [text, setText] = useState('Welcome to my profile!');
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
  }, [userId]);

  useEffect(() => {
    const user = userData.find(user => user.userId === parseInt(userId)); 
    if (user) {
      setUser(user);
      setProfileImage(user.profileImg);
      setBackgroundImage(user.backgroundImg);
      setText(user.bioText || 'Welcome to my profile!'); 
    }
  }, [userId]); 

  const handleImageClick = (ref) => {
    ref.current.click();
  };

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleEdit = () => setEditMode(true);
  const handleSave = () => {
    setEditMode(false);
  };
  const handleChange = (event) => setText(event.target.value);

  useEffect(() => {
    if (editMode && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [editMode, text]);

  const handleFriendClick = (friendId) => {
    navigate(`/profile/${friendId}`);
  };

  if (!user) return <div>Loading...</div>; 

  return (
    <div className='profile'>
      {/* Upper Section */}
      <div className='pb-10'>
        {/* Background Image */}
        <div className='relative pt-40'>
          <div className="w-full absolute top-0 left-0 z-0 h-60" onClick={() => handleImageClick(backgroundRef)}>
            <img
              src={backgroundImage || 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=sph'}
              alt="Background"
              className="object-cover w-full h-60"
            />
            <input type='file' ref={backgroundRef} onChange={(e) => handleImageChange(e, setBackgroundImage)} style={{ display: "none" }} />
          </div>
        </div>

        <div className="relative">
          {/* Profile Image */}
          <div className="relative flex items-start">
            <div className=" w-32 h-32 relative overflow-hidden ml-10 z-10" onClick={() => handleImageClick(profileRef)}>
              <img
                src={profileImage || 'https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg'}
                alt="Profile"
                className="object-cover border rounded w-32 h-32"
              />
              <input type='file' ref={profileRef} onChange={(e) => handleImageChange(e, setProfileImage)} style={{ display: "none" }} />
            </div>

            {/* Username and Follow Button */}
            <div className="ml-4 mt-10 z-10">
              <h3 className="text-black text-xl font-bold mt-2">{user.username}</h3>
            </div>
            <div className="ml-4 mt-10 z-10">
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">Follow</button>
            </div>
          </div>

          {/* Inner Navigation */}
          <div className="relative w-full flex justify-center bg-pink-300 h-12 font-bold z-0 -mt-12">
            {['Profile', 'Lists', 'Stats', 'Journal'].map(tab => (
              <button key={tab} type="button" className="navBut mx-2 mt-2">{tab}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex'>
        {/* Bottom Left */}
        <div className='w-1/4 p-4'>
          <div className='mb-4'>
            <div className="mb-2">Pronouns: {user.pronouns}</div>
            <div className="mb-2">Last Online: {user.lastOnline}</div>
            <div className="mb-2">Joined: {user.joined}</div>
          </div>

          <div className='p-4 rounded mb-4 bg-pink-300'>
            <div className="flex justify-between items-start">
              <div className="flex-grow max-h-64 overflow-auto">
                {editMode ? (
                  <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={handleChange}
                    rows="1"
                    className="w-full resize-none overflow-hidden"
                    style={{ overflowX: 'hidden' }}
                  />
                ) : (
                  <p className='max-h-64 break-words'>{text}</p>
                )}
              </div>
              <button
                className="bg-pink-500 text-xs px-2 py-1 my-auto rounded ml-2"
                onClick={editMode ? handleSave : handleEdit}
              >
                {editMode ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>

          <div className='bg-pink-300 p-4 rounded'>
            <div className="mb-2">Friends</div>
            <div className='grid grid-cols-3 '>
              {user.friends ? user.friends.slice(0, 6).map((friendName, index) => {
                const friend = userData.find(u => u.username === friendName);
                if (friend) {
                  return (
                    <div key={index} onClick={() => handleFriendClick(friend.userId)} className="cursor-pointer">
                      <img
                        src={friend.profileImg}
                        alt={`Friend ${index + 1}`}
                        className="w-16 h-16 border rounded mb-2"
                      />
                    </div>
                  );
                }
                return (
                  <div key={index} className="w-16 h-16 rounded-full "></div>
                );
              }) : new Array(6).fill("").map((_, index) => (
                <div key={index} className="w-16 h-16 rounded-full "></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Right */}
        <div className='w-3/4 p-4'>
          {['Movies', 'Movies'].map((section, index) => (
            <div key={index} className='bg-pink-300 p-4 rounded mb-4'>
              <div className='mb-2 font-semibold'>{section}</div>
              <div className='flex mb-4'>
                <div className='w-1/4'>
                  {['Completed', 'On-hold', 'Dropped', 'Plan to Watch'].map(status => (
                    <div key={status} className='mb-2'>{status}</div>
                  ))}
                </div>
                <div className='w-1/4'>
                  {['Total Entries', 'Rewatched', 'Episodes'].map(detail => (
                    <div key={detail} className='mb-2'>{detail}</div>
                  ))}
                </div>
                <div className='grid grid-cols-1 gap-4 w-2/4'>
                  {new Array(2).fill("").map((_, idx) => (
                    <div key={idx} className="flex items-center bg-gray-700 p-2 rounded">
                      <div className="flex-shrink-0 mr-4">
                        <img src='' alt={`Series ${idx + 1}`} className="w-16 h-16 rounded-full" />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between">
                          <h2 className="text-white text-lg font-semibold">Series Name</h2>
                          <span className="text-gray-400 text-sm">Update Date</span>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className="text-gray-300 text-sm">Additional Info</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
