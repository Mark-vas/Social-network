import React from 'react';
import { changeNewDialogActionCreator, addNewDialogActionCreator, changeNewMessageActionCreator, addNewMessageActionCreator } from '../../State/DialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

const DialogsContainer = (props) => {

    // let mapStateToProps = (state) => {
    //     return {

    //     }
    // }

    // let dispatchToProps = (dispatch) => {
    //     return {

    //     }
    // }

    // const SuperDialogsContainer = connect()()

    let changeDialogsCont = (nameDialog) => {
        // let nameDialog = event.target.value
        props.dispatch(changeNewDialogActionCreator(nameDialog))
    }

    let addNewDialogCont = () => {
        props.dispatch(addNewDialogActionCreator())
    }

    let changeMessageCont = (changeNewMessage) => {
        // let changeNewMessage = event.target.value
        props.dispatch(changeNewMessageActionCreator(changeNewMessage))
    }

    let addNewMessagesCont = () => {
        props.dispatch(addNewMessageActionCreator())
    }

    return (
        <Dialogs state={props.state} changeDialogsCont={changeDialogsCont} addNewDialogCont={addNewDialogCont} changeMessageCont={changeMessageCont} addNewMessagesCont={addNewMessagesCont} />
    )
}

export default DialogsContainer