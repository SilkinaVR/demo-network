import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setUsers, setCurrentPage, toggleFollowingProgress, requestUsers, follow, unfollow } from '../../redux/usersReduser';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthContainer';
import { getPageSize, getPageCount, getCurrentPage, getIsFething, getFollowingInProgress, getUsersSuperSelector } from '../../redux/users-selector';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onpageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {
                this.props.isFething ? <Preloader /> : null
            }
            <Users pageCount={this.props.pageCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onpageChanged={this.onpageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                portionSize={10}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        pageCount: getPageCount(state),
        currentPage: getCurrentPage(state),
        isFething: getIsFething(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsers, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers,
        follow, unfollow
    }),
    withAuthRedirect
)(UsersContainer)

