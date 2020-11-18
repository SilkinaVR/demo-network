import React from 'react';
import ProfileItems from './ProfileItem/ProfileItem';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = (props) => {

  return (
    <div>
      <ProfileItems saveProfile={props.saveProfile} isOwner={props.isOwner} profile={props.profile} status={props.status} 
                  updateStatus={props.updateStatus} setPhoto = {props.setPhoto}/>
      <MyPostContainer store={props.store} />
    </div>
  )
}

export default Profile;