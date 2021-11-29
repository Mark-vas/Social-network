import { combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer'
import friendsReducers from './NavBarReducers'
import usersReducer from './UsersReducer'
import authReducer from './AuthReducer'

let mergeReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducers,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(mergeReducers)

export default store