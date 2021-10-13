import React from 'react';
import classes from './Users.module.css'
import *as axios from 'axios'
// import { render } from '@testing-library/react';

class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
            console.log(this.props)
        })
    }
    clickFollow = (event) => {
        let id = event.target.id
        if (event.target.innerText == 'FOLLOW') {
            this.props.changeFollow(id)
        } else {
            this.props.changeUnFollow(id)
        }
    }
    render() {
        return <div>
            {this.props.users.map((u) => {
                return (
                    <div className={classes.user}>
                        <div>
                            <img className={classes.user_img} src="images/man.png" alt="" />
                            {u.followed == 'true'
                                ? <button className={classes.user_b} id={u.id} onClick={this.clickFollow}>FOLLOW</button>
                                : <button className={classes.user_b} id={u.id} onClick={this.clickFollow}>UNFOLLOW</button>
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
                    </div>
                )
            })}
        </div>

    }
}

export default Users