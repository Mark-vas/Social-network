import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const WithAuthRedirect = (Component) => {
    let WrapperContainer = (props) => {
        if (!props.isAuth) {
            return <Redirect to='/login' />
        }
        return <Component {...props} />
    }

    let ConnectedWithAuthRedirect = connect(mapStateToPropsForRedirect)(WrapperContainer)

    return ConnectedWithAuthRedirect
}
