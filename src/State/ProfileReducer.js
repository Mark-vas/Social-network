const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'
const ADD_NEW_POST = 'ADD-NEW-POST'

const _addPost = (state) => {
    let lastNumberId = [...state.postData].pop()
    if (state.textPost != '') {
        state.postData.push({
            id: lastNumberId.id + 1,
            message: state.textPost,
            likes: 0,
            repost: 0
        })
        // _renderPage(state)
        state.textPost = ''
    }
}

const _changePost = (state, text) => {
    state.textPost = text
    // _renderPage(state)
}

const profileReducer = (state, action) => {
    if (action.type === ADD_NEW_POST) {
        _addPost(state)
    } else if (action.type === CHANGE_TEXT_POST) {
        _changePost(state, action.newText)
    }
    return state
}

export default profileReducer


export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })

export const changeTextPostActionCreator = (text) => ({
    type: CHANGE_TEXT_POST,
    newText: text,
})