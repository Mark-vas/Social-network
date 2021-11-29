import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css'
import img_Profile from '../../images/profile.png'
import *as axios from 'axios'

let Users = (props) => {

    let buttonCount = []
    for (let i = 1; i <= props.totalCount; i++) {
        buttonCount.push(i)
    }
    return <div>
        <div className={classes.usersButton}>
            {buttonCount.map((bc) => {
                return (<button onClick={() => props.clickPage(bc)} className={props.currentPage == bc && classes.button}>{bc}</button>)
            })}
        </div>
        {
            props.users.map((u) => {
                return (<div className={classes.user}>
                    <div>
                        <NavLink to={`profile/${u.id}`}>
                            {u.photos.small == null && u.photos.large == null
                                ? <img className={classes.user_img} src={img_Profile} alt="" />
                                : `<img src=${u.photos.small} />`
                            }
                        </NavLink>

                        {u.followed
                            ? <button className={classes.user_b} id={u.id} onClick={() => {
                                debugger
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: { 'API-KEY': '3dbe0b58-fdcc-4ce3-8eb7-eee6fefd0906' }
                                    })
                                    .then(response => {
                                        debugger
                                        if (response.data.resultCode === 0) {
                                            props.clickFollow(u.id, u.followed)
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            }}>UNFOLLOW</button>
                            : <button className={classes.user_b} id={u.id} onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: { 'API-KEY': '3dbe0b58-fdcc-4ce3-8eb7-eee6fefd0906' }
                                    })
                                    .then(response => {
                                        debugger
                                        if (response.data.resultCode === 0) {
                                            props.clickFollow(u.id, u.followed)
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            }}>FOLLOW</button>
                        }

                    </div>
                    <div className={classes.inf}>
                        <h3>{u.name}</h3>
                        <p>Страна: {u.location == null
                            ? 'Нет данных'
                            : u.location}</p>
                        <p>{u.status == null
                            ? 'Всем привет! Я использую новую социальную сеть'
                            : u.status}</p>
                    </div>
                </div>)

            })
        }
    </div >
}
export default Users