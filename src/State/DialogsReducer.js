const CHANGE_LIST_DIALOGS = 'CHANGE-LIST-DIALOGS'
const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

const _addNewDialog = (state) => {
    let lastNumberId = [...state.dialogs].pop()
    state.dialogs.push({
        id: lastNumberId.id + 1,
        name: state.dialogName
    })
    // this._renderPage(this._state)
    state.dialogName = ''
}

const _changeDialog = (state, newNameDialog) => {
    state.dialogName = newNameDialog
    // this._renderPage(this._state)
}
const _addNewMessage = (state) => {
    let lastMessageID = [...state.messages].pop()
    state.messages.push({
        id: lastMessageID.id + 1,
        message: state.messageText
    })
    // this._renderPage(this._state)
    state.messageText = ''
}
const _changeMessage = (state, newMessage) => {
    state.messageText = newMessage
    // this._renderPage(this._state)
}

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG:
            _addNewDialog(state)
            break
        case CHANGE_LIST_DIALOGS:
            _changeDialog(state, action.newNameDialog)
            break
        case ADD_NEW_MESSAGE:
            _addNewMessage(state)
            break
        case CHANGE_NEW_MESSAGE:
            _changeMessage(state, action.newMessage)
            break
    }
    return state
}

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