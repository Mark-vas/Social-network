import React from 'react';
import classes from './Users.module.css'


const Users = (props) => {
    debugger

    // props.setUsers(
    //     {
    //         users: [
    //             { id: 1, follow: 'FOLLOW', fullname: 'Ivan V', status: 'online', location: 'Russia, Moscow' },
    //             { id: 2, follow: 'UNFOLLOW', fullname: 'Lena M', status: 'offline', location: 'Russia, SPb' },
    //             { id: 3, follow: 'FOLLOW', fullname: 'Sasha G', status: 'online', location: 'Russia, Kazan' },
    //         ]
    //     }
    // )

    if (props.users.length == 0) {
        props.setUsers(
            [
                { id: 1, follow: 'FOLLOW', fullname: 'Ivan V', status: 'online', location: 'Russia, Moscow' },
                { id: 2, follow: 'UNFOLLOW', fullname: 'Lena M', status: 'offline', location: 'Russia, SPb' },
                { id: 3, follow: 'FOLLOW', fullname: 'Sasha G', status: 'online', location: 'Russia, Kazan' },
            ]
        )
    }

    let clickFollow = (event) => {
        let id = event.target.id
        if (event.target.innerText == 'FOLLOW') {
            props.changeFollow(id)
        } else {
            props.changeUnFollow(id)
        }
    }

    let usersElem = props.users.map((u) => {
        return (
            <div className={classes.user}>
                <div>
                    <img className={classes.user_img} src="images/man.png" alt="" />
                    <button className={classes.user_b} id={u.id} onClick={clickFollow}>{u.follow}</button>
                </div>
                <div className={classes.inf}>
                    <h3>{u.fullname}</h3>
                    <p>{u.location}</p>
                    <p>{u.status}</p>
                </div>
            </div>
        )
    })
    debugger
    return (
        <div>
            {usersElem}
        </div>
    )
}

export default Users