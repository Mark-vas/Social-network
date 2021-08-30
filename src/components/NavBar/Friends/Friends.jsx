import React from 'react';
import classes from './Friends.module.css'

const Friends = (props) => {
    let friendName = props.friends.friends.map(f =>
        <div className={classes.friends}>
            <img src='#' />
            {f.name}
        </div>)

    return (
        <div>
            {friendName}
        </div>
    )
}
export default Friends