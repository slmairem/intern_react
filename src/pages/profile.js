import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import userData from '../assets/userData.json';
import movieData from '../assets/movieData.json';
import Comment from '../functions/profilePage/comment.js';
import MoviesSection from '../functions/profilePage/movieSection.js';
import SeriesSection from '../functions/profilePage/seriesSection.js';
import ProfileHeader from '../functions/profilePage/profileHeader.js';
import FriendList from '../functions/profilePage/friendList.js';
import UserInfo from '../functions/profilePage/userInfo.js';
import FavoritesContainer from '../functions/profilePage/favouritesContainer.js';

function Profile() {
  const { userId } = useParams();
  const [profileImage, setProfileImage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [text, setText] = useState('Welcome to my profile!');
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef(null);
  const profileImageRef = useRef(null);
  const backgroundImageRef = useRef(null);
  const [user, setUser] = useState(null);
  const [userMovies, setUserMovies] = useState([]);
  const [userSeries, setUserSeries] = useState([]);
  const [movieStatusCounts, setMovieStatusCounts] = useState({});
  const [seriesStatusCounts, setSeriesStatusCounts] = useState({});
  const [favorites, setFavorites] = useState({ movies: [], series: [], characters: [], voiceActors: [] });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [userId]);

  useEffect(() => {
    const user = userData.find((user) => user.userId === parseInt(userId));
    if (user) {
      setUser(user);
      setProfileImage(user.profileImg);
      setBackgroundImage(user.backgroundImg);
      setText(user.bioText || 'Welcome to my profile!');

      const movies = movieData.filter((movie) => user.movies.some((m) => m.id === movie.id && movie.type === 'Movies'));
      setUserMovies(movies);

      const series = movieData.filter((series) => user.movies.some((s) => s.id === series.id && series.type === 'Series'));
      setUserSeries(series);

      setFavorites(user.favs || { movies: [], series: [], characters: [], voiceActors: [] });

      const movieCounts = { completed: 0, planToWatch: 0, onHold: 0, dropped: 0 };
      const seriesCounts = { completed: 0, watching: 0, planToWatch: 0, onHold: 0, dropped: 0 };

      const statusMapping = {
        c: 'completed',
        ptw: 'planToWatch',
        oh: 'onHold',
        d: 'dropped',
        w: 'watching'
      };

      user.movies.forEach((movie) => {
        const type = movieData.find((m) => m.id === movie.id)?.type;
        const countType = statusMapping[movie.status];

        if (type === 'Movies' && countType) {
          movieCounts[countType] += 1;
        } else if (type === 'Series' && countType) {
          seriesCounts[countType] += 1;
        }
      });

      setMovieStatusCounts(movieCounts);
      setSeriesStatusCounts(seriesCounts);
    }
  }, [userId]);

  const totalMovies = userMovies.length;
  const totalSeries = userSeries.length;
  const rewatchedMovies = userMovies.filter((movie) => movie.rewatched).length;
  const rewatchedSeries = userSeries.filter((series) => series.rewatched).length;

  const handleImageClick = (ref) => {
    ref.current.click();
  };

  const handleItemClick = (name) => {
    const encodedName = encodeURIComponent(name);
    navigate(`/detail/${encodedName}`);
  };

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleEdit = () => setEditMode(true);
  const handleSave = () => setEditMode(false);
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
        <ProfileHeader
          user={user}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          backgroundImage={backgroundImage}
          setBackgroundImage={setBackgroundImage}
          handleImageClick={handleImageClick}
          profileImageRef={profileImageRef}
          backgroundImageRef={backgroundImageRef}
          handleImageChange={handleImageChange}
        />
      </div>

      {/* Bottom Section */}
      <div className='flex font-IndieFlower'>
        {/* Details Section */}
        <div className='w-1/4 p-4'>
          <UserInfo
            user={user}
            text={text}
            editMode={editMode}
            textareaRef={textareaRef}
            handleChange={handleChange}
            handleSave={handleSave}
            handleEdit={handleEdit}
          />

          <FriendList
            friends={user.friends}
            userData={userData}
            handleFriendClick={handleFriendClick}
          />

          <FavoritesContainer 
            favorites={favorites} 
            movieData={movieData} 
            userData={userData} 
            handleItemClick={handleItemClick}
          />
        </div>

        {/* Bottom Right */}
        <div className='w-3/4 p-4'>
          <div className='bg-gradient-to-br from-sky-300 to-sky-500 p-4 rounded mb-4'>
            <MoviesSection
              movieStatusCounts={movieStatusCounts}
              totalMovies={totalMovies}
              rewatchedMovies={rewatchedMovies}
              userMovies={userMovies}
              handleItemClick={handleItemClick}
            />
          </div>

          <div className='bg-gradient-to-br from-sky-300 to-sky-500 p-4 rounded mb-4'>
            <SeriesSection
              seriesStatusCounts={seriesStatusCounts}
              totalSeries={totalSeries}
              rewatchedSeries={rewatchedSeries}
              userSeries={userSeries}
              handleItemClick={handleItemClick}
            />
          </div>

          <Comment />
        </div>
      </div>
    </div>
  );
}

export default Profile;
