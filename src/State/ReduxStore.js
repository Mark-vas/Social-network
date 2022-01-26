import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer'
import friendsReducers from './NavBarReducers'
import usersReducer from './UsersReducer'
import authReducer from './AuthReducer'
import thunk from 'redux-thunk'

let mergeReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducers,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(mergeReducers, applyMiddleware(thunk))

export default store