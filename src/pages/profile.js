import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import userData from '../assets/userData.json';
import data from '../assets/data.json';
import Comment from '../functions/profilePage/comment';
import MoviesSection from '../functions/profilePage/movieSection';
import SeriesSection from '../functions/profilePage/seriesSection';
import ProfileHeader from '../functions/profilePage/profileHeader';
import FriendList from '../functions/profilePage/friendList';
import UserInfo from '../functions/profilePage/userInfo';
import FavouritesContainer from '../functions/profilePage/favouritesContainer';
import ImageGrid from '../functions/listsPage/imageGrid';
import BarChart from '../functions/profilePage/chartScore';
import MoviesWithSelectedScore from '../functions/profilePage/scoreMovieList';
import Journal from '../functions/profilePage/journal'; 

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
  const [publishedLists, setPublishedLists] = useState([]);
  const [activeTab, setActiveTab] = useState('Profile');
  const [scoreDistribution, setScoreDistribution] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedType, setSelectedType] = useState('Movies');
  const [journalEntries, setJournalEntries] = useState([]);
  const [selectedScore, setSelectedScore] = useState(0); 
  const navigate = useNavigate();

  useEffect(() => {
    const user = userData.find((user) => user.userId === parseInt(userId));
    if (user) {
      setUser(user);
      setProfileImage(user.profileImg);
      setBackgroundImage(user.backgroundImg);
      setText(user.bioText || 'Welcome to my profile!');
  
      // Filter and set movies
      const movies = data.Movies.filter((movie) => user.movies.some((m) => m.id === movie.id));
      setUserMovies(movies);
  
      // Filter and set series
      const series = data.Series.filter((series) => user.movies.some((s) => s.id === series.id));
      setUserSeries(series);
  
      //Favourites
      const movieFavorites = data.Movies.filter((movie) => user.favs.movies.includes(movie.id));
      const seriesFavorites = data.Series.filter((series) => user.favs.series.includes(series.id));
      const characterFavorites = data.Series.flatMap((series) =>
        series.characters.filter((char) => user.favs.characters.includes(char.charId))
      );
      const voiceActorFavorites = data.Series.flatMap((series) =>
        series.characters.filter((char) => user.favs.voiceActors.includes(char.charStaffId))
      );

      setFavorites({
        movies: movieFavorites,
        series: seriesFavorites, // Burada series'i doğru şekilde ayarladık.
        characters: characterFavorites,
        voiceActors: voiceActorFavorites,
      });

      // Count movies and series statuses
      const movieCounts = { completed: 0, planToWatch: 0, onHold: 0, dropped: 0 };
      const seriesCounts = { completed: 0, watching: 0, planToWatch: 0, onHold: 0, dropped: 0 };
  
      const statusMapping = {
        c: 'completed',
        ptw: 'planToWatch',
        oh: 'onHold',
        d: 'dropped',
        w: 'watching'
      };
  
      user.movies.forEach((entry) => {
        const type = data.Movies.find((m) => m.id === entry.id) ? 'Movies' : 'Series';
        const countType = statusMapping[entry.status];
  
        if (type === 'Movies' && countType) {
          movieCounts[countType] += 1;
        } else if (type === 'Series' && countType) {
          seriesCounts[countType] += 1;
        }
      });
  
      setMovieStatusCounts(movieCounts);
      setSeriesStatusCounts(seriesCounts);
      setPublishedLists(user.publishedLists || []);
  
      // Score Distribution
      const scoreDist = Array(10).fill(0);
      user.movies.forEach((movie) => {
        if (movie.score > 0) {
          scoreDist[movie.score - 1] += 1;
        }
      });
  
      setScoreDistribution(
        scoreDist.map((count, index) => ({
          label: (index + 1).toString(),
          value: count * 50
        }))
      );
  
      // Journal Section
      const sortedEntries = user.movies
        .map((entry) => {
          const media = data.Movies.find((item) => item.id === entry.id) || data.Series.find((item) => item.id === entry.id);
          return {
            date: new Date(entry.date),
            imgSrc: media?.imgSrc,
            name: media?.name,
            score: entry.score,
            status: statusMapping[entry.status] || 'Unknown'
          };
        })
        .sort((a, b) => b.date - a.date);
  
      setJournalEntries(sortedEntries);
    }
  }, [userId]);
  

  const handleBarClick = (score) => {
    const moviesWithScore = userMovies.filter((movie) => movie.score === score);
    setSelectedMovies(moviesWithScore);
    setSelectedType('Movies');
    setSelectedScore(score);
  };

  const totalMovies = userMovies.length;
  const totalSeries = userSeries.length;
  const rewatchedMovies = userMovies.filter((movie) => movie.rewatched).length;
  const rewatchedSeries = userSeries.filter((series) => series.rewatched).length;

  const handleItemClick = (name) => {
    const encodedName = encodeURIComponent(name);
    navigate(`/detail/${encodedName}`);
  };

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getImages = (ids) => {
    const allMoviesAndSeries = [...data.Movies, ...data.Series];
    return ids.map(id => {
      const item = allMoviesAndSeries.find(item => item.id === id);
      return item ? item.imgSrc : '';
    });
  };
  
  const renderLists = () => {
    if (!user || !user.publishedLists) return null;

    return (
      <div className='container mx-auto font-IndieFlower'>
        <div className="sections mb-4">
          <div className="pageName text-2xl font-bold">Lists</div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          {user.publishedLists.map((list) => (
            <ImageGrid
              key={list.listId}
              images={getImages(list.movies)}
              listName={list.listName}
              username={user.username}
              likes={list.likes}
            />
          ))}
        </div>
      </div>
    );
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
          onTabClick={handleTabClick}
        />
      </div>

      {/* Bottom Section */}
      <div className='flex font-IndieFlower'>
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

          <FavouritesContainer
            favorites={favorites}
            handleItemClick={handleItemClick}
          />
        </div>

        <div className='w-3/4 p-4'>
          {activeTab === 'Profile' && (
            <>
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
            </>
          )}

          {activeTab === 'Lists' && renderLists()}

          {activeTab === 'Stats' && (
            <div>
              <div className='container mx-auto font-IndieFlower'>
                <div className="sections mb-4">
                  <div className="pageName text-2xl font-bold">Score Distribution</div>
                </div>
                <BarChart
                  data={scoreDistribution}
                  onBarClick={handleBarClick}
                />
                <MoviesWithSelectedScore
                  selectedMovies={selectedMovies}
                  user={user}
                  selectedType={selectedType}
                  selectedScore={selectedScore} 
                />
              </div>
            </div>
          )}

          {activeTab === 'Journal' && (
            <div className='container mx-auto font-IndieFlower'>
              <div className="sections mb-4">
                <div className="pageName text-2xl font-bold">Journal</div>
              </div>
              <div className='bg-gradient-to-br from-sky-300 to-sky-500 rounded p-4'>
                {journalEntries.map((entry, index) => (
                  <Journal
                    key={index}
                    date={entry.date.toLocaleDateString()}
                    image={entry.imgSrc}
                    name={entry.name}
                    score={entry.score}
                    status={entry.status} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
