import React, { useRef } from 'react';

const ProfileHeader = ({ user, profileImage, setProfileImage, backgroundImage, setBackgroundImage, handleImageClick, handleImageChange }) => {
  const profileRef = useRef(null);
  const backgroundRef = useRef(null);

  return (
    <>
    {/* Background Image Section */}
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

    {/* Profile Image Section */}
    <div className="relative flex items-start font-IndieFlower">
        <div className="w-32 h-32 relative overflow-hidden ml-10 z-10" onClick={() => handleImageClick(profileRef)}>
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
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Follow</button>
        </div>
    </div>
    {/* Inner Navigation */}
    <div className="relative w-full flex justify-center h-12 font-bold z-0 -mt-12 bg-gradient-to-r from-indigo-600 from-10% via-sky-600 via-30% to-emerald-600 to-90% font-IndieFlower">
        {['Profile', 'Lists', 'Stats', 'Journal'].map(tab => (
            <button key={tab} type="button" className="text-gray-50 mx-2 mt-2 font-bold text-xl hover:text-slate-300">{tab}</button>
        ))}
    </div>
    </>
  );
};

export default ProfileHeader;
