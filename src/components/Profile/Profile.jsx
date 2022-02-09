import React from 'react';
import classes from './Profile.module.css'
import Description from './Description/Description';
import MyPostContainer from './MyPosts/MyPostContainer';
import StatusProfile from './Status/StatusProfile';

const Profile = (props) => {
  return (
    <main className={classes.profile}>
      <Description isPreloader={props.isPreloader} profile={props.profile} />
      <StatusProfile status={'ffff'} />
      <MyPostContainer />
    </main >
  )
}

export default Profile