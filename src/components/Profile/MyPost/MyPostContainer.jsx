import React from 'react';
import { addPostActionCreator, onChangePostActionCreator } from '../../../redux/profileReduser';
import MyPost from './MyPost';

import { connect } from 'react-redux';



// const MyPostContainer = (props) => {
//   // debugger;
//   // console.log('ddd');
//   // console.log(props.store.getState().profilePage.postData);
//   return (
//     <StoreContext.Consumer>{

//       (store) => {
//         let state = store.getState();
//         let onChangePost = (text) => {
//           store.dispatch(onChangePostActionCreator(text));
//         }
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());

//         }
//         return (
//           <MyPost addPost={addPost}
//             updatePost={onChangePost}
//             posts={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText} />
//         )
//       }
//     }
//     </StoreContext.Consumer>
//   )
// }
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;