import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setIsPreloaderAC } from '../../State/UsersReducer'
import UsersAPI from './UsersAPI'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isPreloader: state.usersPage.isPreloader,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (id) => { dispatch(followAC(id)) },
        changeUnFollow: (id) => { dispatch(unfollowAC(id)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (numberPage) => { dispatch(setCurrentPageAC(numberPage)) },
        toggleIsFetching: (isPreloader) => { dispatch(setIsPreloaderAC(isPreloader)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer