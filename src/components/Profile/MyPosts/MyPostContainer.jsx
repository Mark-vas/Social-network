import MyPost from './MyPost'
import { addNewPostActionCreator } from '../../../State/ProfileReducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPostCont: (newPost) => { dispatch(addNewPostActionCreator(newPost)) },
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer