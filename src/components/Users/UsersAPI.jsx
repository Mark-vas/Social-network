import React from 'react';
import *as axios from 'axios'
import Users from './Users '
import Preloader from '../Preloader/Preloader'

class UsersAPI extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}`, { withCredentials: true })
            .then(response => {
                debugger
                this.props.toggleIsFetching(false)
                debugger
                this.props.setUsers(response.data.items)
            })
    }

    clickPage = (numberPage) => {
        debugger
        this.props.setCurrentPage(numberPage)
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${numberPage}`, { withCredentials: true }).then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    clickFollow = (id, followed) => {
        debugger
        if (followed) {
            this.props.changeFollow(id)
        } else this.props.changeUnFollow(id)

    }

    render() {
        debugger
        return <>
            <Preloader isPreloader={this.props.isPreloader} />
            <Users totalCount={this.props.totalCount}
                clickPage={this.clickPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                clickFollow={this.clickFollow}
            />
        </>
    }
}

export default UsersAPI