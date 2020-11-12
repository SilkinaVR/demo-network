import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../Images/User.png'
import Users from './UsersC'

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items);
                this.props.setpagecount(response.data.totalCount);
            })
    }
        onpageChanged =(pageNumber)=>{
            this.props.setcurrentpage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items)

            })
        }
    render() {  return  <Users pageCount = {this.props.pageCount}
    pageSize = {this.props.pageSize}
    currentPage = {this.props.currentPage}
    users = {this.props.users}
    onpageChanged = {this.onpageChanged}
    
    />
    }

}
export default UsersContainer;