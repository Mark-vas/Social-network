import React from 'react';
import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profiles</NavLink>
                <NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink>
                {/* <a href='/news'>News</a>
                <a href='/music'>Music</a>
                <a href='/settings'>Settings</a> */}
            </div>
        </nav>
    )
}

export default NavBar