import React from 'react';
import { changeNewDialogActionCreator, addNewDialogActionCreator, changeNewMessageActionCreator, addNewMessageActionCreator } from '../../State/DialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        dialogName: state.dialogsPage.dialogName,
        messageText: state.dialogsPage.messageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDialogsCont: (nameDialog) => { dispatch(changeNewDialogActionCreator(nameDialog)) },
        addNewDialogCont: () => { dispatch(addNewDialogActionCreator()) },
        changeMessageCont: (changeNewMessage) => { dispatch(changeNewMessageActionCreator(changeNewMessage)) },
        addNewMessagesCont: () => { dispatch(addNewMessageActionCreator()) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer