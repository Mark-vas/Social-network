import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfilePageThunkCreator, getProfileStatus, updateProfileStatus } from '../../State/ProfileReducer'
import { withRouter } from 'react-router';
import { WithAuthRedirect } from '../Hoc/Hoc'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId
        this.props.setProfilePageThunkCreator(userId)
        debugger
        this.props.getProfileStatus(userId)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     debugger
    //     if (!this.props.profile == prevProps.profile) {
    //         let userId = this.props.match.params.userId
    //         this.props.setProfilePageThunkCreator(userId)
    //         debugger
    //         this.props.getProfileStatus(userId)
    //     }
    // }

    render() {
        return < Profile {...this.props} profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus} />
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.toggleIsPreloader,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, { setProfilePageThunkCreator, getProfileStatus, updateProfileStatus }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// let WithRouterProfileContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, { setProfilePageThunkCreator, })(WithRouterProfileContainer)
