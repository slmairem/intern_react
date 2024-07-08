import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/homepage.css';

function Homepage() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="homepage">
      {/* User Auth section */}
      <div className="userauth">
        <div className="upper">
          App Name 
          <br />
          Didn't you discover the Neverland yet? 
        </div> 
        <div className="bottom">
          <button type="button" className="btn btn-secondary" onClick={navigateToRegister}>Create a free account</button> or <a href="/login" className="login-link">login</a> if you have an account.
        </div>   
      </div>
      
      {/* Lists section */}
      <div className="lists">
        <div className="aniMovies">
          <div className="aniMovUp">
            Movies
            <br />
            Database Num
          </div>
          <div className="aniMovBottom">
            Movies List
          </div>
        </div>
        <div className="aniSeries">
          <div className="aniSerUp">
            Series
            <br />
            Database Num
          </div>
          <div className="aniSerBottom">
            Series List (slider)
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bottom-container">
        <div className="left">
          <div className="news">
            <h3>Recent News</h3>
            <div className="news-items">
              <div className="news-row">
                <div className="news-item">
                  <img src="https://media.istockphoto.com/id/1378051067/photo/letter-m-red-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=k_lEDGakjN2Wo8GskB84Uba8OnyFoTOWH9h_pFnBjg4=" alt="News 1" className="news-image" />
                  <div className="news-content">
                    <div className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
                <div className="news-item">
                  <img src="path/to/image2.jpg" alt="News 2" className="news-image" />
                  <div className="news-content">
                    <div className="news-title">News Title 2...</div>
                    <div className="news-description">Short description for news 2...</div>
                  </div>
                </div>
                <div className="news-item">
                  <img src="path/to/image3.jpg" alt="News 3" className="news-image" />
                  <div className="news-content">
                    <div className="news-title">News Title 3...</div>
                    <div className="news-description">Short description for news 3...</div>
                  </div>
                </div>
              </div>
              <div className="news-row">
                <div className="news-item">
                  <img src="path/to/image4.jpg" alt="News 4" className="news-image" />
                  <div className="news-content">
                    <div className="news-title">News Title 4...</div>
                    <div className="news-description">Short description for news 4...</div>
                  </div>
                </div>
                <div className="news-item">
                  <img src="path/to/image5.jpg" alt="News 5" className="news-image" />
                  <div className="news-content">
                    <div className="news-title">News Title 5...</div>
                    <div className="news-description">Short description for news 5...</div>
                  </div>
                </div>
                <div className="news-item">
                  <img src="path/to/image6.jpg" alt="News 6" className="news-image" />
                  <div className="news-content">
                    <div className="news-title">News Title 6...</div>
                    <div className="news-description">Short description for news 6...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="forumTop">
            <h3>Forum Topics</h3>
            {/* Forum topics content */}
          </div>
        </div>
        <div className="right">
          <div className="popularLists">
            <h3>Popular Lists</h3>
            {/* Popular lists content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
