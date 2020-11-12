import React from 'react'
import Paginator from '../Common/Paginator/Paginator'
import User from './User'

const Users = (props) => {
    return (
        <div>
            <Paginator pageCount={props.pageCount} pageSize={props.pageSize}
                onpageChanged={props.onpageChanged} currentPage={props.currentPage} portionSize = {props.portionSize}/>

            {props.users.map(u =>
                <User key={u.id} users={u} followingInProgress={props.followingInProgress}
                    follow={props.follow} unfollow={props.unfollow} />
            )}
        </div>
    )
}
export default Users;