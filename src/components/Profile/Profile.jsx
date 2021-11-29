import React from 'react';
import classes from './Profile.module.css'
import Description from './Description/Description';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
  debugger
  return (
    <main className={classes.profile}>
      <Description isPreloader={props.isPreloader} profile={props.profile} />
      {/* <MyPostContainer /> */}
    </main >
  )
}

export default Profile