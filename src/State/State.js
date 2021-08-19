let store = {
    _renderPage() {

    },
    subscribe(observer) {
        this._renderPage = observer
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
            messages: [
                { id: 1, message: 'Хорошего дня!' },
                { id: 2, message: 'Как дела?' },
                { id: 3, message: 'Чем занят?' },
            ]
        },
        friends: [
            { id: 1, name: 'Alina' },
            { id: 2, name: 'Misha' },
            { id: 3, name: 'Anton' }
        ]
    },
    getState() {
        return this._state
    },
    _addPost() {
        if (this._state.profilePage.textPost != '') {
            this._state.profilePage.postData.push({
                id: 4,
                message: this._state.profilePage.textPost,
                likes: 0,
                repost: 0
            })
            this._renderPage(this._state)
            this._state.profilePage.textPost = ''
        }
    },
    _changePost(text) {
        this._state.profilePage.textPost = text
        this._renderPage(this._state)
    },
    dispatch(action) {
        debugger
        if (action.type === 'ADD-NEW-POST') {
            this._addPost()
        } else if (action.type === 'CHANGE-TEXT-POST') {
            this._changePost(action.newText)
        }
    }
}

export default store