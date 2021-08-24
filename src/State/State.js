import dialogsReducer from "./DialogsReducer"
import profileReducer from "./ProfileReducer"

// const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'
// const ADD_NEW_POST = 'ADD-NEW-POST'
// const CHANGE_LIST_DIALOGS = 'CHANGE-LIST-DIALOGS'
// const ADD_NEW_DIALOG = 'ADD-NEW-DIALOG'
// const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE'
// const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

let store = {
    _renderPage() {

    },
    subscribe(observer) {
        this._renderPage = observer
    },
    getState() {
        return this._state
    },
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Это мой первый пост', likes: '102', repost: '5' },
                { id: 2, message: 'Привет всем!', likes: '232', repost: '10' },
                { id: 3, message: 'Теперь я работаю Frontend-разработчиком', likes: '52', repost: '1' }
            ],
            textPost: ''
        },
        dialogsPage: {
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
        },
        friends: [
            { id: 1, name: 'Alina' },
            { id: 2, name: 'Misha' },
            { id: 3, name: 'Anton' }
        ]
    },
    // _addPost() {
    //     let lastNumberId = [...this._state.profilePage.postData].pop()
    //     if (this._state.profilePage.textPost != '') {
    //         this._state.profilePage.postData.push({
    //             id: lastNumberId.id + 1,
    //             message: this._state.profilePage.textPost,
    //             likes: 0,
    //             repost: 0
    //         })
    //         this._renderPage(this._state)
    //         this._state.profilePage.textPost = ''
    //     }
    // },
    // _changePost(text) {
    //     this._state.profilePage.textPost = text
    //     this._renderPage(this._state)
    // },

    // _addNewDialog() {
    //     debugger
    //     let lastNumberId = [...this._state.dialogsPage.dialogs].pop()
    //     this._state.dialogsPage.dialogs.push({
    //         id: lastNumberId.id + 1,
    //         name: this._state.dialogsPage.dialogName
    //     })
    //     this._renderPage(this._state)
    //     this._state.dialogsPage.dialogName = ''
    // },

    // _changeDialog(newNameDialog) {
    //     this._state.dialogsPage.dialogName = newNameDialog
    //     this._renderPage(this._state)
    // },
    // _addNewMessage() {
    //     debugger
    //     let lastMessageID = [...this._state.dialogsPage.messages].pop()
    //     this._state.dialogsPage.messages.push({
    //         id: lastMessageID.id + 1,
    //         message: this._state.dialogsPage.messageText
    //     })
    //     this._renderPage(this._state)
    //     this._state.dialogsPage.messageText = ''
    // },
    // _changeMessage(newMessage) {
    //     this._state.dialogsPage.messageText = newMessage
    //     this._renderPage(this._state)
    // },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._renderPage(this._state)


        // if (action.type === ADD_NEW_POST) {
        //     this._addPost()
        // } else if (action.type === CHANGE_TEXT_POST) {
        //     this._changePost(action.newText)
        // } 
        // else if (action.type === ADD_NEW_DIALOG) {
        //     this._addNewDialog()
        // } else if (action.type === CHANGE_LIST_DIALOGS) {
        //     this._changeDialog(action.newNameDialog)
        // } else if (action.type === ADD_NEW_MESSAGE) {
        //     this._addNewMessage()
        // } else if (action.type === CHANGE_NEW_MESSAGE) {
        //     this._changeMessage(action.newMessage)
        // }
    },
}

export default store

// export const addNewDialogActionCreator = () => ({ type: ADD_NEW_DIALOG })

// export const changeNewDialogActionCreator = (nameDialog) => ({
//     type: CHANGE_LIST_DIALOGS,
//     newNameDialog: nameDialog
// })

// export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })

// export const changeTextPostActionCreator = (text) => ({
//     type: CHANGE_TEXT_POST,
//     newText: text,
// })

// export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE })

// export const changeNewMessageActionCreator = (changeNewMessage) => ({
//     type: CHANGE_NEW_MESSAGE,
//     newMessage: changeNewMessage,
// })