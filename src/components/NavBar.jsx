import React from 'react';
import classes from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={classes.nav}>
            <div>
                <a>Profiles</a>
                <a>Messages</a>
                <a>News</a>
                <a>Music</a>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default NavBar