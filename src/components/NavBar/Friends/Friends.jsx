import React from 'react';
import classes from './Friends.module.css'
import img_Friends from '../../../images/man.png'

const Friends = (props) => {
    let friendName = props.friendList.friends.map(f =>
        <div className={classes.friends}>
            <img src={img_Friends} />
            <h4 className={classes.friendname} >{f.name}</h4>
        </div>)
    return (
        <div>
            {friendName}
        </div>
    )
}
export default Friends