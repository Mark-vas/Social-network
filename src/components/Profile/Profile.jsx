import React from 'react';
import classes from './Profile.module.css'
import Description from './Description/Description';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
  return (
    <main className={classes.profile}>
      <Description />
      <MyPostContainer state={props.state.profilePage} dispatch={props.dispatch} />
    </main >
  )
}

export default Profile