import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getProfile, getStatus, updateStatus, setPhoto, saveProfile } from '../../redux/profileReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthContainer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {
        
        return (
            <Profile {...this.props} 
                    status={this.props.status} 
                    isOwner = {! this.props.match.params.userId} 
                    setPhoto = {this.props.setPhoto}
                    saveProfile = {this.props.saveProfile}
                    />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus, setPhoto, saveProfile }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

// const MyProfileContainer = withRouter(ProfileContainer);

// let AuthRedirect = withAuthRedirect(MyProfileContainer)

// export default connect(mapStateToProps, {setUserProfile, getProfile}) (AuthRedirect);

