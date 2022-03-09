import { usersAPI } from "../api/api"
import { profileAPI } from "../api/api"

const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_PROFILE = 'SET_PROFILE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const SET_STATUS = 'SET_STATUS'

let stateInitialization = {
    postData: [
        { id: 1, message: 'Это мой первый пост', likes: '102', repost: '5' },
        { id: 2, message: 'Привет всем!', likes: '232', repost: '10' },
        { id: 3, message: 'Теперь я работаю Frontend-разработчиком', likes: '52', repost: '1' }
    ],
    profile: null,
    toggleIsPreloader: true,
    status: ''
}
const profileReducer = (state = stateInitialization, action) => {

    switch (action.type) {
        case SET_STATUS:
            return { ...state, status: action.status }

        case TOGGLE_PRELOADER:
            return { ...state, isPreloader: action.toggleIsPreloader }

        case ADD_NEW_POST:

            let lastNumberId = [...state.postData].pop()
            if (action.newPost !== "") {
                state.postData = [...state.postData, {
                    id: lastNumberId.id + 1,
                    message: action.newPost,
                    likes: 0,
                    repost: 0
                }]
                return state
            }
            return state

        case SET_PROFILE:
            return { ...state, profile: action.profile }

        default:
            return state
    }
}

export const setProfileStatus = (status) => ({ type: SET_STATUS, status })

export const addNewPostActionCreator = (newPost) => ({ type: ADD_NEW_POST, newPost })

export const setProfileAC = (profile) => ({
    type: SET_PROFILE, profile
})

export const setIsPreloaderAC = (isPreloader) => ({ type: TOGGLE_PRELOADER, isPreloader })

export const setProfilePageThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getProfilePage(userId)
            .then(response => {
                // debugger
                dispatch(setIsPreloaderAC(false))
                dispatch(setProfileAC(response))
            })
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        // debugger
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    debugger
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

export const getProfileStatus = (id) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(id)
            .then(response => {
                // debugger
                dispatch(setProfileStatus(response))
            })
    }
}

export default profileReducer