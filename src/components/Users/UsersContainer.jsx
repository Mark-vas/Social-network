import React from 'react';
import { followAC, unfollowAC, setUsersAC } from '../../State/UsersReducer'
import Users from './Users'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        changeFollow: (id) => { dispatch(followAC(id)) },
        changeUnFollow: (id) => { dispatch(unfollowAC(id)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer