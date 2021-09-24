const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'
const ADD_NEW_POST = 'ADD-NEW-POST'

let stateInitialization = {
    postData: [
        { id: 1, message: 'Это мой первый пост', likes: '102', repost: '5' },
        { id: 2, message: 'Привет всем!', likes: '232', repost: '10' },
        { id: 3, message: 'Теперь я работаю Frontend-разработчиком', likes: '52', repost: '1' }
    ],
    textPost: '',
}

// const _addPost = (state) => {
//     let lastNumberId = [...state.postData].pop()
//     if (state.textPost != '') {
//         state.postData.push({
//             id: lastNumberId.id + 1,
//             message: state.textPost,
//             likes: 0,
//             repost: 0
//         })
//         state.textPost = ''
//     }
// }

// const _addPost = (state) => {
//     let lastNumberId = [...state.postData].pop()
//     if (state.textPost != '') {
//         let stateCopy = { ...state }
//         stateCopy.postData = [...state.postData]
//         stateCopy.postData.push({
//             id: lastNumberId.id + 1,
//             message: state.textPost,
//             likes: 0,
//             repost: 0
//         })
//         state.textPost = ''
//         return stateCopy
//     }
// }

// const _changePost = (state, text) => {
//     debugger
//     let stateCopy = { ...state }
//     stateCopy.textPost = text
//     return stateCopy
// }

const profileReducer = (state = stateInitialization, action) => {

    let stateCopy
    switch (action.type) {
        case ADD_NEW_POST:
            debugger
            let lastNumberId = [...state.postData].pop()
            if (state.textPost != '') {
                stateCopy = { ...state }
                stateCopy.postData = [...state.postData, {
                    id: lastNumberId.id + 1,
                    message: state.textPost,
                    likes: 0,
                    repost: 0
                }]
                stateCopy.textPost = ''
                return stateCopy
            }
            return state

        case CHANGE_TEXT_POST:
            stateCopy = { ...state, textPost: action.newText }
            return stateCopy

        default:
            return state
    }

    // switch (action.type) {
    //     case ADD_NEW_POST:
    //         _addPost(state)
    //     case CHANGE_TEXT_POST:
    //         _changePost(state, action.newText)
    //     default:
    //         return state
    // }
    // if (action.type === ADD_NEW_POST) {
    //     _addPost(state)
    // } else if (action.type === CHANGE_TEXT_POST) {
    //     _changePost(state, action.newText)
    // }
    // return state
}

export default profileReducer


export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })

export const changeTextPostActionCreator = (text) => ({
    type: CHANGE_TEXT_POST,
    newText: text,
})