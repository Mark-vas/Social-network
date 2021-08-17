import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = (props) => {
  let postElements = props.state.postData.map(p => <Post message={p.message} likes={p.likes} repost={p.repost} />)

  let newTextPost = React.createRef();

  let addNewPost = () => {
    props.addPost()
  }

  let changeTextPost = () => {
    let text = newTextPost.current.value
    props.changePost(text)
  }

  return (
    <div className={classes.posts}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea onChange={changeTextPost} ref={newTextPost} value={props.state.textPost} cols="50" rows="3"></textarea>
          <button onClick={addNewPost}>Добавить</button>
        </div>
      </div>
      {postElements}
    </div>
  )
}

export default MyPost