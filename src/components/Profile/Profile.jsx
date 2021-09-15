import React from 'react';
import classes from './Profile.module.css'
import Description from './Description/Description';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = () => {
  return (
    <main className={classes.profile}>
      <Description />
      <MyPostContainer />
    </main >
  )
}

export default Profile