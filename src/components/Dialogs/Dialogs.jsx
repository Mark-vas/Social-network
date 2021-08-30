import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    debugger
    let dialogsElem = props.state.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} />)

    let messagesElem = props.state.dialogsPage.messages.map(m => <Message message={m.message} />)

    let changeDialogs = (event) => {
        let nameDialog = event.target.value
        props.changeDialogsCont(nameDialog)
    }

    let addNewDialog = () => {
        props.addNewDialogCont()
    }

    let changeMessage = (event) => {
        let changeNewMessage = event.target.value
        props.changeMessageCont(changeNewMessage)
    }

    let addNewMessages = () => {
        props.addNewMessagesCont()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElem}
                <textarea onChange={changeDialogs} value={props.state.dialogsPage.dialogName} cols="20" rows="1"></textarea>
                <button onClick={addNewDialog}>Add</button>
            </div>
            <div className={classes.messages}>
                {messagesElem}
                <div>
                    <textarea value={props.state.dialogsPage.messageText} onChange={changeMessage} cols="50" rows="2"></textarea>
                </div>
                <div>
                    <button onClick={addNewMessages}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs