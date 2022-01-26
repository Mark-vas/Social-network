import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { authThunkCreator } from '../../State/AuthReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunkCreator()
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

export default connect(mapStateToProps, { authThunkCreator })(HeaderContainer)
