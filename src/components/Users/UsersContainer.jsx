import React from 'react';
import Users from './Users '
import Preloader from '../Preloader/Preloader'
import { connect } from 'react-redux';
import { followThunkCreator, unfollowThunkCreator, getUsersThunkCreator, clickPageThunkCreator } from '../../State/UsersReducer'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage)
    }

    clickPage = (numberPage) => {
        this.props.clickPageThunkCreator(numberPage)
    }

    render() {
        return <>
            <Preloader isPreloader={this.props.isPreloader} />
            <Users
                isDisabled={this.props.isDisabled}
                totalCount={this.props.totalCount}
                clickPage={this.clickPage}
                users={this.props.users}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isPreloader: state.usersPage.isPreloader,
        isDisabled: state.usersPage.isDisabled,
    }
}

export default connect(mapStateToProps, { followThunkCreator, unfollowThunkCreator, getUsersThunkCreator, clickPageThunkCreator })(UsersContainer)