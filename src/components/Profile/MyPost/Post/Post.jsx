import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (

      <div className={s.item} >

        <img className={s.avatar} src="https://s4.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg" alt="" />
        <div>
          {props.message}
          <span>like {props.count}</span>
        </div>

      </div>



  )
}

export default Post;