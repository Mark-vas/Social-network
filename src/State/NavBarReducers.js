import { usersAPI } from "../api/api"

const MY_PROFILE = 'MY_PROFILE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'

let stateInitialization = {
    friends: [
        { id: 1, name: 'Alina' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Anton' }
    ],
    myProfile: null,
    isPreloader: true
}

const navBarReducers = (state = stateInitialization, action) => {
    switch (action.type) {
        case MY_PROFILE:
            return { ...state, myProfile: action.myProfile }

        case TOGGLE_PRELOADER:
            return { ...state, isPreloader: action.isPreloader }
        default:
            return state
    }
}

export const meProfileAC = (myProfile) => ({
    type: MY_PROFILE, myProfile
})
export const setIsPreloaderAC = (isPreloader) => ({ type: TOGGLE_PRELOADER, isPreloader })

export const getMeProfilePageThunkCreator = () => {
    return (dispatch) => {
        // debugger
        usersAPI.getMeProfile()
            .then(response => {
                dispatch(setIsPreloaderAC(false))
                dispatch(meProfileAC(response.data))
            })
    }
}

export default navBarReducers