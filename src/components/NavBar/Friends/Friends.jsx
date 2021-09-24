import React from 'react';
import classes from './Friends.module.css'

const Friends = (props) => {
    let friendName = props.friendList.friends.map(f =>
        <div className={classes.friends}>
            <img src='images/profile.png' />
            <h4 className={classes.friendname} >{f.name}</h4>
        </div>)
    return (
        <div>
            {friendName}
        </div>
    )
}
export default Friends