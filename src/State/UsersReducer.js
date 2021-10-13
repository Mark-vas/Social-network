const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let stateInitialization = {
    users: [
        //         { id: 1, follow: 'FOLLOW', fullname: 'Ivan V', status: 'online', location: 'Russia, Moscow' },
        //         { id: 2, follow: 'UNFOLLOW', fullname: 'Lena M', status: 'offline', location: 'Russia, SPb' },
        //         { id: 3, follow: 'FOLLOW', fullname: 'Sasha G', status: 'online', location: 'Russia, Kazan' },
    ],
}

const usersReducer = (state = stateInitialization, action) => {

    let stateCopy
    switch (action.type) {
        case SET_USERS:
            // debugger
            return { ...state, users: [...action.users] }

        case FOLLOW:
            // debugger
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
            // debugger
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