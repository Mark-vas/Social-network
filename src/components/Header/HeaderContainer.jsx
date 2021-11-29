import React from 'react';
import *as axios from 'axios'
import Header from './Header'
import { connect } from 'react-redux';
import { authAC } from '../../State/AuthReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            { withCredentials: true }
        )
            .then(response => {

                if (response.data.resultCode === 0) {
                    this.props.authAC(response.data.data)
                }

            })
    }
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />
    }

}

let mapStateToProps = (state) => {

    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { authAC })(HeaderContainer)
