import React from 'react';
import classes from './NavBar.module.css'
import FriendsContainer from './Friends/FriendsContainer'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}><h3>Profiles</h3></NavLink>
                <NavLink to='/messages' activeClassName={classes.active}><h3>Messages</h3></NavLink>
            </div>
            <div className={classes.friends}>
                <h3>Friends</h3>
                <FriendsContainer />
            </div>
        </nav>
    )
}

export default NavBar