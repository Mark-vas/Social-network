import React from 'react';
import classes from './Header.module.css'
import img_Logo from '../../images/vk.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={classes.header}>
            <img src={img_Logo} />
            <div className={classes.login}>
                {props.isAuth
                    ? <h3>{props.login}</h3>
                    : <NavLink to='auth/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header