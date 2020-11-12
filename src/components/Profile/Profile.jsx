import React from 'react';
import ProfileItems from './ProfileItem/ProfileItem';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileItems profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostContainer store={props.store} />
    </div>
  )
}

export default Profile;