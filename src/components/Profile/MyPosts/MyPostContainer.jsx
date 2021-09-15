import React from 'react';
import MyPost from './MyPost'
import { addNewPostActionCreator, changeTextPostActionCreator } from '../../../State/ProfileReducer'
import { connect } from 'react-redux';

// const MyPostContainer = (props) => {
//   debugger
//   let addNewPostCont = () => {
//     props.dispatch(addNewPostActionCreator())
//   }

//   let changeTextPostCont = (text) => {
//     // let text = newTextPost.current.value
//     props.dispatch(changeTextPostActionCreator(text))
//   }

//   return (
//     <MyPost state={props.state} addNewPostCont={addNewPostCont} changeTextPostCont={changeTextPostCont} />
//   )
// }

let mapStateToProps = (state) => {

  return {
    postData: state.profilePage.postData,
    textPost: state.profilePage.textPost
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPostCont: () => { dispatch(addNewPostActionCreator()) },
    changeTextPostCont: (text) => { dispatch(changeTextPostActionCreator(text)) },
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer