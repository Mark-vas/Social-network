import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Alina' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Anton' }
    ]

    let messages = [
        { id: 1, message: 'Хорошего дня!' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Чем занят?' },
    ]

    let dialogsElem = dialogs.map(d => <Dialog id={d.id} name={d.name} />)

    let messagesElem = messages.map(m => <Message message={m.message} />)

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