import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPosts/MyPost'

function Profile() {
  return (
    <main className={classes.profile}>
      <div className={classes.description}>
        <div className={classes.avatar}>
          <img src="images/nzQUof-JqQ0.jpg" alt=""></img>
        </div>
        <div className={classes.name}>
          Vasyaev Mark
        </div>
      </div>
      <MyPost />
    </main >
  )
}

export default Profile