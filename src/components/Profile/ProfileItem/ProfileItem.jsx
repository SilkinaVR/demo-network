import React from 'react'
import s from './ProfileItem.module.css'
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHook from '../ProfileStatusWithHook';

const ProfileItems = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    // debugger
    return (        
        <div>
            <img src={props.profile.photos.large} alt='sdv' />
            <div className={s.description}>
                {props.profile.fullName}
                
                {/* <ProfileStatus status = {props.status} updateStatus ={props.updateStatus}/> */}
                <ProfileStatusWithHook status = {props.status} updateStatus ={props.updateStatus}/>
            </div>
        </div>
    );
}
export default ProfileItems;