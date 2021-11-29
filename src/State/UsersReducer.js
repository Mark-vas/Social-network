const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'

let stateInitialization = {
    users: [],
    currentPage: 1,
    totalCount: 5,
    isPreloader: true
}

const usersReducer = (state = stateInitialization, action) => {

    let stateCopy
    switch (action.type) {
        case TOGGLE_PRELOADER:
            debugger
            return { ...state, isPreloader: action.isPreloader }

        case SET_CURRENT_PAGE:
            debugger
            return { ...state, currentPage: action.numberPage }

        case SET_USERS:
            debugger
            return { ...state, users: [...action.users] }

        case FOLLOW:
            debugger
            stateCopy = {
                ...state,
                users: [...state.users].map((u) => {
                    if (u.id == action.userID) {
                        return { ...u, followed: 'false' }
                    } else
                        return u
                })
            }
            return stateCopy

        case UNFOLLOW:
            debugger
            stateCopy = {
                ...state,
                users: [...state.users].map((u) => {
                    if (u.id == action.userID) {
                        return { ...u, followed: 'true' }
                    } else
                        return u
                })
            }
            return stateCopy
        default:
            return state
    }
}

export default usersReducer

export const followAC = (userID) => ({ type: FOLLOW, userID })

export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID, })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export const setCurrentPageAC = (numberPage) => ({ type: SET_CURRENT_PAGE, numberPage })

export const setIsPreloaderAC = (isPreloader) => ({ type: TOGGLE_PRELOADER, isPreloader })