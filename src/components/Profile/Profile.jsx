import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPosts/MyPost'
import Description from './Description/Description';

const Profile = (props) => {
  return (
    <main className={classes.profile}>
      <Description />
      <MyPost state={props.state.profilePage} dispatch={props.dispatch} />
    </main >
  )
}

export default Profile