import React from 'react';
import classes from './NavBar.module.css'
import FriendsContainer from './Friends/FriendsContainer'
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const NavBar = (props) => {
    // debugger

    if (!props.myProfile) {
        return <Preloader isPreloader={props.isPreloader} />
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={`/profile/${props.myProfile.id}`} activeClassName={classes.active}><h3>Profile</h3></NavLink>
                <NavLink to='/messages' activeClassName={classes.active}><h3>Messages</h3></NavLink>
                <NavLink to='/users' activeClassName={classes.active}><h3>Users</h3></NavLink>
            </div>
            <div className={classes.friends}>
                <h3>Friends</h3>
                <FriendsContainer />
            </div>
        </nav>
    )
}

export default NavBar