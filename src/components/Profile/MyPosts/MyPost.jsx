import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = (props) => {

  let postElements = props.postData.map(p => <Post message={p.message} likes={p.likes} repost={p.repost} />)

  let addNewPost = () => {
    props.addNewPostCont()
  }

  let changeTextPost = (event) => {
    let text = event.target.value
    props.changeTextPostCont(text)
  }

  return (
    <div className={classes.posts}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={changeTextPost} value={props.textPost} cols="50" rows="3"></textarea>
          <button onClick={addNewPost}>Добавить</button>
        </div>
      </div>
      {postElements}
    </div>
  )
}

export default MyPost