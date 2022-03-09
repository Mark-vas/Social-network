import { usersAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let stateInitialization = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = stateInitialization, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            // debugger
            return { ...state, ...action.userData, isAuth: true }
        default:
            return state
    }
}

export const authAC = (userData) => ({ type: SET_USER_DATA, userData })

export const authThunkCreator = () => {
    return (dispatch) => {
        usersAPI.getMeProfile()
            .then(response => {
                // debugger
                if (response.resultCode === 0) {
                    dispatch(authAC(response.data))
                }
            })
    }
}

export default authReducer