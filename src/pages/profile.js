import React from 'react';

function Profile() {
  return (
    <div className='profile'>
      <div className='top'>
        <div className='topImages'>
          <img src=" " alt="backImg" className="backImg" />
          <img src=" " alt="profilePic" className="profilePic" />
          <h3 className='Username'>Username</h3>
          <button type="button" className="followBut">Follow</button>
        </div>
        <div className='buttons'>
          <button type="button" className="navBut">Profile</button>
          <button type="button" className="navBut">Lists</button>
          <button type="button" className="navBut">Stats</button>
          <button type="button" className="navBut">Journal</button>
        </div>
      </div>
      <div className='bottom'>
        <div className='leftWing'>
          <div className='panels'>
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
