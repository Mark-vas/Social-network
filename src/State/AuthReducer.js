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

            return { ...state, ...action.userData, isAuth: true }
        default:
            return state
    }
}

export default authReducer

export const authAC = (userData) => ({ type: SET_USER_DATA, userData })
