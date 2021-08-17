let store = {
    _renderPage() {

    },
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Это мой первый пост', likes: '102', repost: '5' },
                { id: 2, message: 'Как у тебя дела?', likes: '232', repost: '10' },
                { id: 3, message: 'Удачи тебе!', likes: '52', repost: '1' }
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
    addPost() {
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
    changePost(text) {
        this._state.profilePage.textPost = text
        this._renderPage(this._state)
    },
    subscribe(observer) {
        this._renderPage = observer
    },
    getState() {
        return this._state
    }
}

export default store