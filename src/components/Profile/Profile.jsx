import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPosts/MyPost'
import Description from './Description/Description';

const Profile = () => {
  return (
    <main className={classes.profile}>
      <Description />
      <MyPost />
    </main >
  )
}

export default Profile