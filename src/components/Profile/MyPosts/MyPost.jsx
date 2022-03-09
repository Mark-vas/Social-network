import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post'
import FormPost from './FormPost/FormPost'

const MyPost = (props) => {
  let postElements = props.postData.map(p => <Post message={p.message} likes={p.likes} repost={p.repost} />)

  let addNewPost = (data) => {

    props.addNewPostCont(data.newPost)
    data.newPost = ''
  }

  return (
    <div className={classes.posts}>
      <div>
        <h3>My posts</h3>
        <FormPost onSubmit={addNewPost} />
      </div>
      {postElements}
    </div>
  )
}

export default MyPost