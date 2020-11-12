import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'api/ADD_POST';
const UPDATE_POST = 'api/UPDATE_POST';
const SET_USER_PROFILE = 'api/SET_USER_PROFILE';
const SET_STATUS = 'api/SET_STATUS';
const DELETE_POST = 'api/DELETE_POST';

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
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const onChangePostActionCreator = (text) => ({ type: UPDATE_POST, newPost: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatusProfile = (status) => ({ type: SET_STATUS, status })
export const deletePost = (idPost) => ({ type: DELETE_POST, idPost })

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
    console.log(response.data);
    if (response.data.resultCode === 0)
        dispatch(setStatusProfile(status));
}

export default profileReduser;