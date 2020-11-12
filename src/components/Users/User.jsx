import React from 'react'
import styles from './Users.module.css'

import userPhoto from '../../Images/User.png'
import { NavLink } from 'react-router-dom'

const User = (props) => {
    let u = props.users;
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={styles.photo}
                            src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" />
                    </NavLink>
                </div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unfollow(u.id);
                    }}>UnFollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id);
                    }}>Follow</button>
                }
            </span>

            {/* {console.log("followingInProgress")}
            {console.log(props.followingInProgress)} */}
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                {/* <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div> */}

            </span>
        </div>
    )
}
export default User;