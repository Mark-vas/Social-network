import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfilePageThunkCreator } from '../../State/ProfileReducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setProfilePageThunkCreator(userId)
    }
    render() {
        return < Profile {...this.props} profile={this.props.profile} />
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.toggleIsPreloader,
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfilePageThunkCreator })(WithRouterProfileContainer)
