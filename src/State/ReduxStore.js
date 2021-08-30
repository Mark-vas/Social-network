import { combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsReducer'
import friendsReducers from './NavBarReducers'

let mergeReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducers,
})

let store = createStore(mergeReducers)

export default store