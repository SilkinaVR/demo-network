import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../Images/User.png'
import Preloader from '../../../Common/Preloader/Preloader';

const Post = (props) => {
  if (!props.profile) {
    return <Preloader />
}
  return (

      <div className={s.item} >

        <img className={s.avatar} src={props.profile.photos.large !==null ? props.profile.photos.large :userPhoto } alt="" />
        <div>
          {props.message}
          <span>like {props.count}</span>
        </div>

      </div>



  )
}

export default Post;