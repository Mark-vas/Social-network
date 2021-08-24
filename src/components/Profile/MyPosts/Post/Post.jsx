import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.posts}>
      <div className={classes.newposts}>
        <img src='images/user.png'></img>
        <span>
          {props.message}
        </span>
        <div className={classes.like}>
          like {props.likes}
        </div>
        <div className={classes.repost}>
          repost {props.repost}
        </div>
      </div>
    </div>
  )
}

export default Post