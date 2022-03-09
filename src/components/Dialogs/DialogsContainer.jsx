import { changeNewDialogActionCreator, addNewDialogActionCreator, changeNewMessageActionCreator, addNewMessageActionCreator } from '../../State/DialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        dialogName: state.dialogsPage.dialogName,
        messageText: state.dialogsPage.messageText,
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
)(Dialogs)