import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {

  let postData = [
    { id: 1, message: 'Это мой первый пост', likes: '102', repost: '5' },
    { id: 2, message: 'Как у тебя дела?', likes: '232', repost: '10' },
    { id: 3, message: 'Удачи тебе!', likes: '52', repost: '1' }
  ]

  let postElements = postData.map(p => <Post message={p.message} likes={p.likes} repost={p.repost} />)

  return (
    <div className={classes.posts}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea name="" id="" cols="50" rows="3"></textarea>
          <button>Добавить</button>
        </div>
      </div>
      {postElements}
    </div>
  )
}

export default MyPost