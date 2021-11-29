const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST'
const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_PROFILE = 'SET_PROFILE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'

let stateInitialization = {
    postData: [
        { id: 1, message: 'Это мой первый пост', likes: '102', repost: '5' },
        { id: 2, message: 'Привет всем!', likes: '232', repost: '10' },
        { id: 3, message: 'Теперь я работаю Frontend-разработчиком', likes: '52', repost: '1' }
    ],
    textPost: '',
    profile: null,
    toggleIsPreloader: true,
}
const profileReducer = (state = stateInitialization, action) => {

    let stateCopy
    switch (action.type) {
        case TOGGLE_PRELOADER:
            debugger
            return { ...state, isPreloader: action.toggleIsPreloader }

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

        case SET_PROFILE:
            return { ...state, profile: action.profile }

        default:
            return state
    }
}

export default profileReducer

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })

export const changeTextPostActionCreator = (text) => ({
    type: CHANGE_TEXT_POST,
    newText: text,
})

export const setProfileAC = (profile) => ({
    type: SET_PROFILE,
    profile
})

export const setIsPreloaderAC = (isPreloader) => ({ type: TOGGLE_PRELOADER, isPreloader })