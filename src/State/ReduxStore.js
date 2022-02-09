import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer'
import friendsReducers from './NavBarReducers'
import usersReducer from './UsersReducer'
import authReducer from './AuthReducer'
import navBarReducers from './NavBarReducers'
import thunk from 'redux-thunk'

let mergeReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducers,
    usersPage: usersReducer,
    auth: authReducer,
    navBar: navBarReducers,
})

let store = createStore(mergeReducers, applyMiddleware(thunk))

export default store