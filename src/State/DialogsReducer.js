const CHANGE_LIST_DIALOGS = 'CHANGE-LIST-DIALOGS'
const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

let stateInitialization = {
    dialogs: [
        { id: 1, name: 'Alina' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Anton' }
    ],
    dialogName: '',
    messages: [
        { id: 1, message: 'Хорошего дня!' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Чем занят?' },
    ],
    messageText: ''
}

// const _addNewDialog = (state) => {
//     let lastNumberId = [...state.dialogs].pop()
//     state.dialogs.push({
//         id: lastNumberId.id + 1,
//         name: state.dialogName
//     })
//     state.dialogName = ''
// }

// const _changeDialog = (state, newNameDialog) => {
//     state.dialogName = newNameDialog
// }
// const _addNewMessage = (state) => {
//     let lastMessageID = [...state.messages].pop()
//     state.messages.push({
//         id: lastMessageID.id + 1,
//         message: state.messageText
//     })
//     state.messageText = ''
// }
// const _changeMessage = (state, newMessage) => {
//     state.messageText = newMessage
// }

const dialogsReducer = (state = stateInitialization, action) => {
    window.state = state
    let stateCopy
    switch (action.type) {
        case ADD_NEW_DIALOG:
            if (state.dialogName !== '') {
                let lastNumberId = [...state.dialogs].pop()
                stateCopy = { ...state }
                stateCopy.dialogs = [...state.dialogs, {
                    id: lastNumberId.id + 1,
                    name: state.dialogName
                }]
                stateCopy.dialogName = ''
                return stateCopy
            }

        case CHANGE_LIST_DIALOGS:
            stateCopy = { ...state }
            stateCopy.dialogName = action.newNameDialog
            return stateCopy

        case ADD_NEW_MESSAGE:
            let lastMessageID = [...state.messages].pop()
            stateCopy = { ...state }
            stateCopy.messages = [...state.messages, {
                id: lastMessageID.id + 1,
                message: state.messageText
            }]
            stateCopy.messageText = ''
            return stateCopy

        case CHANGE_NEW_MESSAGE:
            stateCopy = { ...state }
            stateCopy.messageText = action.newMessage
            return stateCopy

        default:
            return state
    }
}

// switch (action.type) {
//     case ADD_NEW_DIALOG:
//         _addNewDialog(state)
//     case CHANGE_LIST_DIALOGS:
//         _changeDialog(state, action.newNameDialog)
//     case ADD_NEW_MESSAGE:
//         _addNewMessage(state)
//     case CHANGE_NEW_MESSAGE:
//         _changeMessage(state, action.newMessage)
//     default:
//         return state
// }

export default dialogsReducer

export const addNewDialogActionCreator = () => ({ type: ADD_NEW_DIALOG })

export const changeNewDialogActionCreator = (nameDialog) => ({
    type: CHANGE_LIST_DIALOGS,
    newNameDialog: nameDialog
})

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE })

export const changeNewMessageActionCreator = (changeNewMessage) => ({
    type: CHANGE_NEW_MESSAGE,
    newMessage: changeNewMessage,
})