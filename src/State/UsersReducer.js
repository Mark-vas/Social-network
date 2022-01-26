import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const TOGGLE_DISABLED = 'TOGGLE_DISABLED'

let stateInitialization = {
    users: [],
    currentPage: 1,
    totalCount: 5,
    isPreloader: true,
    isDisabled: [],
}

const usersReducer = (state = stateInitialization, action) => {

    switch (action.type) {
        case TOGGLE_DISABLED:
            const newState = {
                ...state, isDisabled: action.isFFF
                    ? [...state.isDisabled, action.id]
                    : state.isDisabled.filter(id => id != action.id)
            }
            return newState

        case TOGGLE_PRELOADER:
            return { ...state, isPreloader: action.isPreloader }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.numberPage }

        case SET_USERS:
            return { ...state, users: [...action.users] }

        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map((u) => {
                    if (u.id == action.userID) {
                        return { ...u, followed: 'true' }
                    } else
                        return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map((u) => {
                    if (u.id == action.userID) {
                        return { ...u, followed: false }
                    } else
                        return u
                })
            }
        default:
            return state
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })

export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID, })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export const setCurrentPageAC = (numberPage) => ({ type: SET_CURRENT_PAGE, numberPage })

export const setIsPreloaderAC = (isPreloader) => ({ type: TOGGLE_PRELOADER, isPreloader })

export const isDisabledAC = (isFFF, id) => ({ type: TOGGLE_DISABLED, isFFF, id })

export const getUsersThunkCreator = (currentPage) => {
    return (dispatch) => {
        dispatch(setIsPreloaderAC(true))
        usersAPI.getUsers(currentPage)
            .then(response => {
                dispatch(setIsPreloaderAC(false))
                dispatch(setUsersAC(response.items))
            })
    }
}

export const clickPageThunkCreator = (numberPage) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(numberPage))
        usersAPI.getUsers(numberPage)
            .then(response => {
                dispatch(setUsersAC(response.items))
            })
    }
}

export const followThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(isDisabledAC(true, userID))
        usersAPI.postFollow(userID)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followAC(userID))
                    dispatch(isDisabledAC(false, userID))
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const unfollowThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(isDisabledAC(true, userID))
        usersAPI.deleteFollow(userID)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollowAC(userID))
                    dispatch(isDisabledAC(false, userID))
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export default usersReducer