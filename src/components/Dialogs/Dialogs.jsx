import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElem = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} />)

    let messagesElem = props.state.messages.map(m => <Message message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElem}
            </div>
            <div className={classes.messages}>
                {messagesElem}
            </div>
        </div>
    )
}

export default Dialogs