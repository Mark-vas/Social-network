import React from 'react';
import *as axios from 'axios'
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileAC } from '../../State/ProfileReducer'
import { setIsPreloaderAC } from '../../State/ProfileReducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                debugger
                this.props.setIsPreloaderAC(false)
                this.props.setProfileAC(response.data)
            })
    }
    render() {
        return < Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => {
    debugger
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.toggleIsPreloader,
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfileAC, setIsPreloaderAC })(WithRouterProfileContainer)
