import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    // User Auth yapıldığı vakit bu kısım silinecek
    <div>
      <div className='userauth'>
        <div className='upper'>
          App Name 
          <br />
          Didn't you discover the Neverland yet? 
        </div> 
        <div className='bottom'>
          <button type="button" className="btn btn-secondary" onClick={navigateToRegister}>Create a free account</button> or <a href="/login" className="login-link">login</a> if you have an account.
        </div>   
      </div>
        
      <div className='lists'>
        <div className='aniMovies'>
          <div className='aniMovUp'>
            Movies
            Database Num
          </div>
          <div className='aniMovBottom'>
            Movies List
          </div>
        </div>
        <div className='aniSeries'>
          <div className='aniSerUp'>
            Series
            Database Num
          </div>
          <div className='aniSerBottom'>
            Series List
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='Right'>
          <div className='news'>
            Recently News
          </div>
          <div className='forumTop'>
            Forum Topics
          </div>
        </div>
        <div className='Left'>
          <div className='lists'>
            Popular Lists
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
