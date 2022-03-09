// import dialogsReducer from "./DialogsReducer"
// import friendsReducers from "./NavBarReducers"
// import profileReducer from "./ProfileReducer"

// let store = {
//     _renderPage() {

//     },
//     subscribe(observer) {
//         this._renderPage = observer
//     },
//     getState() {
//         return this._state
//     },
//     _state: {
//         profilePage: {
//             postData: [
//                 { id: 1, message: 'Это мой первый пост', likes: '102', repost: '5' },
//                 { id: 2, message: 'Привет всем!', likes: '232', repost: '10' },
//                 { id: 3, message: 'Теперь я работаю Frontend-разработчиком', likes: '52', repost: '1' }
//             ],
//             textPost: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Alina' },
//                 { id: 2, name: 'Misha' },
//                 { id: 3, name: 'Anton' }
//             ],
//             dialogName: '',
//             messages: [
//                 { id: 1, message: 'Хорошего дня!' },
//                 { id: 2, message: 'Как дела?' },
//                 { id: 3, message: 'Чем занят?' },
//             ],
//             messageText: ''
//         },
//         friends: [
//             { id: 1, name: 'Alina' },
//             { id: 2, name: 'Misha' },
//             { id: 3, name: 'Anton' }
//         ]
//     },
//     dispatch(action) {
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state.dialogsPage, action)
//         friendsReducers(this._state.friends, action)
//         this._renderPage(this._state)
//     },
// }

// export default store