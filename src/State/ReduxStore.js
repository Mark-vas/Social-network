import { combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer'
import friendsReducers from './NavBarReducers'
import usersReducer from './UsersReducer'

let mergeReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducers,
    usersPage: usersReducer,
})

let store = createStore(mergeReducers)

export default store