import React from 'react';
import { changeNewDialogActionCreator, addNewDialogActionCreator, changeNewMessageActionCreator, addNewMessageActionCreator } from '../../State/DialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../Hoc/Hoc'
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        dialogName: state.dialogsPage.dialogName,
        messageText: state.dialogsPage.messageText,
        // isAuth: state.auth.isAuth,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // WithAuthRedirect,
)(Dialogs)

// let AuthRedirectComponent = WithAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

// export default DialogsContainer