import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.posts}>
      <div className={classes.newposts}>

        <span><img align="middle" src='images/nzQUof-JqQ0.jpg'></img>
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