import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import PostForm from './MyPostForm';


const MyPost = React.memo((props) => {

  let addPost = (text) => {
    props.addPost(text);
  }

  let postElements = props.posts.map(post => {
    return <Post key={post.id} profile={props.profile} message={post.message} count={post.count} />
  })
  return (
    <div className={s.content}>
      <div className={s.item}> My posts </div>
      <PostForm addMessage={addPost} namebutton={'Add'} placeholder={'Начните ввод'} />

      {postElements}

    </div>
  )
})

export default MyPost;