import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post'

function MyPost() {
  return (
    <div className={classes.posts}>
      <div>
        My posts
        <div>
          <textarea name="" id="" cols="50" rows="3"></textarea>
          <button>Добавить</button>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPost