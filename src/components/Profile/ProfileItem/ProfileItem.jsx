import React, { useState } from 'react'
import s from './ProfileItem.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHook from '../ProfileStatusWithHook';
import userPhoto from '../../../Images/User.png'
import cn  from 'classnames'

import ProfileDataFormRedux from './ProfileDataForm';

const ProfileItems = (props) => {
    let [editeMode, setEditeMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }
    let onUpdatePhoto = (e) => {
        props.setPhoto(e.target.files[0])

    }
    let onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditeMode(false);
            }
        );
    }

    return (
        <div className={cn(s.profile, s.profilecolor)}>
            <img className={s.mainPhoto} src={props.profile.photos.large || userPhoto} alt='PhotoUser' />

            {props.isOwner &&
                <div className={'s.button__file'}>
                    <button className={s.input_file}>Edit photo
                        <input type={'file'} onChange={onUpdatePhoto} />
                    </button>
                </div>
            }

            <div className={s.title}>Status</div>
            <div className={s.status}>
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
            </div>
            {editeMode
                ? <ProfileDataFormRedux onSubmit={onSubmit} initialValues={props.profile} profile={props.profile} />
                : <ProfileData goToEditForm={() => setEditeMode(true)} isOwner={props.isOwner} profile={props.profile} />
            }
        </div >
    );
}

const ProfileData = ({ profile, isOwner, goToEditForm }) => {
    return <div className={s.description}>
        {isOwner && <div><button onClick={goToEditForm}>Edit</button></div>}
        <div className={s.name}>{profile.fullName}</div>
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>lookingForAJob:</b>    {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>My professional skills:  </b>  {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />

            })}
        </div>
    </div>
}
const Contacts = ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}>
        <b>{contactTitle}</b> : {contactValue}
    </div>

}
export default ProfileItems;