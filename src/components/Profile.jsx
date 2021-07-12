import React from 'react';
import classes from './Profile.module.css'

function Profile() {
  return (
    <main className={classes.profile}>
      <div>
        <img src=""></img>
      </div>
      <div>
        Avatar + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
      </div>
      <div>
        Post 1
      </div>
      <div>
        Post 2
      </div>
    </main>
  )
}

export default Profile