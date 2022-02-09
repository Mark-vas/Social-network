import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfilePageThunkCreator, meProfilePageThunkCreator } from '../../State/ProfileReducer'
import { withRouter } from 'react-router';
// import Description from './Description/Description';
// import { Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../Hoc/Hoc'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        // if (!this.props.match.params.userId) {
        //     this.props.meProfilePageThunkCreator()
        // }
        // debugger
        let userId = this.props.match.params.userId
        this.props.setProfilePageThunkCreator(userId)
    }
    render() {
        // if (!this.props.isAuth) {
        //     return <Redirect to='/login' />
        // }
        return <>
            < Profile {...this.props} profile={this.props.profile} />
        </>


    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isPreloader: state.profilePage.toggleIsPreloader,
    }
}

export default compose(
    connect(mapStateToProps, { setProfilePageThunkCreator, }),
    withRouter,
    // WithAuthRedirect,
)(ProfileContainer)

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

// let WithRouterProfileContainer = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, { setProfilePageThunkCreator, })(WithRouterProfileContainer)
