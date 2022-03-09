import React from 'react';
import classes from './Post.module.css'
import img_Profile from '../../../../images/user.png'

const Post = (props) => {
  // debugger
  return (
    <div className={classes.posts}>
      <div className={classes.newposts}>
        <span><img align="middle" src={img_Profile}></img>
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