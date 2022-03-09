import React from 'react';
import classes from './Profile.module.css'
import Description from './Description/Description';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
  return (
    <main className={classes.profile}>
      <Description isPreloader={props.isPreloader} profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
      <MyPostContainer />
    </main >
  )
}

export default Profile