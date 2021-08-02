import React from 'react';
import classes from './Post.module.css'

function Post() {
  return (
    <div className={classes.posts}>
      <div className={classes.newposts}>
        <img src='#'></img>
        Post 1
      </div>
    </div>
  )
}

export default Post