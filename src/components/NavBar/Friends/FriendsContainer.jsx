import React from 'react';
import classes from './Friends.module.css'
import { connect } from 'react-redux';
import Friends from './Friends'

let mapStateToProps = (state) => {
    return {
        friendList: state.friends
    }
}

let mapDispatchToProps = () => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer