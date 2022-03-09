import React from "react";
import { getMeProfilePageThunkCreator } from '../../State/NavBarReducers'
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { WithAuthRedirect } from '../Hoc/Hoc'
import NavBar from "./NavBar";
import { connect } from 'react-redux';

class NavBarContainer extends React.Component {
    componentDidMount() {
        // debugger
        this.props.getMeProfilePageThunkCreator()
    }
    render() {
        return <NavBar {...this.props} myProfile={this.props.myProfile} />
    }
}

let mapStateToProps = (state) => {
    return {
        myProfile: state.navBar.myProfile,
        isPreloader: state.profilePage.toggleIsPreloader,
    }
}

export default compose(
    connect(mapStateToProps, { getMeProfilePageThunkCreator, }),
    withRouter,
    // WithAuthRedirect,
)(NavBarContainer)