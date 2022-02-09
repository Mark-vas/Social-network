import React from "react";
import { getMeProfilePageThunkCreator } from '../../State/NavBarReducers'
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { WithAuthRedirect } from '../Hoc/Hoc'
import NavBar from "./NavBar";
import { connect } from 'react-redux';
import Preloader from "../Preloader/Preloader";

class NavBarContainer extends React.Component {
    componentDidMount() {
        // debugger
        this.props.getMeProfilePageThunkCreator()
    }
    render() {
        // if (!this.myProfile) {
        //     return <Preloader isPreloader={this.props.isPreloader} />
        // }

        return <>
            {/* <Preloader isPreloader={this.props.isPreloader} /> */}
            <NavBar {...this.props} myProfile={this.props.myProfile} />
        </>
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
    WithAuthRedirect,
)(NavBarContainer)