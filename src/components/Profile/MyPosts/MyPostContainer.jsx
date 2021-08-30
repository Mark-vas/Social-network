import React from 'react';
import MyPost from './MyPost'
import { addNewPostActionCreator, changeTextPostActionCreator } from '../../../State/ProfileReducer'

const MyPostContainer = (props) => {
  debugger
  let addNewPostCont = () => {
    props.dispatch(addNewPostActionCreator())
  }

  let changeTextPostCont = (text) => {
    // let text = newTextPost.current.value
    props.dispatch(changeTextPostActionCreator(text))
  }

  return (
    <MyPost state={props.state} addNewPostCont={addNewPostCont} changeTextPostCont={changeTextPostCont} />
  )
}

export default MyPostContainer