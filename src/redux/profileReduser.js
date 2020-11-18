import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from 'redux-form'

const ADD_POST = 'profile/ADD_POST';
const UPDATE_POST = 'profile/UPDATE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'its my post', count: 20 },
        { id: 3, message: 'its you post', count: 20 }
    ],
    newPostText: 'it-kama',
    profile: null,
    status: ''
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                count: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost]
            };
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.newPost
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: { ...action.profile }
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                postData: [...state.postData.filter(p => p.id !== action.idPost)]
            };
            case SAVE_PHOTO_SUCCESS:
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photo}
                };
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const onChangePostActionCreator = (text) => ({ type: UPDATE_POST, newPost: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatusProfile = (status) => ({ type: SET_STATUS, status })
export const deletePost = (idPost) => ({ type: DELETE_POST, idPost })
export const savePhotoSucces = (photo)=>({ type: SAVE_PHOTO_SUCCESS, photo })

export const getProfile = (userId) => async (dispatch) => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getStatus = (id) => async (dispatch) => {
    const response = await profileAPI.getStatus(id)
    dispatch(setStatusProfile(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0)
        dispatch(setStatusProfile(status));
}
export const setPhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.setPhoto(photo);
    // console.log("response");
    // console.log(response);
    if (response.data.resultCode === 0){
        dispatch(savePhotoSucces(response.data.data.photos));
    }

}
export const saveProfile = (profile) => async (dispatch, getStatus) => {
    const userId = getStatus().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0){
        dispatch(getProfile(userId));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('profile', { _error: message }))
        return Promise.reject(message);
    }

}

export default profileReduser;