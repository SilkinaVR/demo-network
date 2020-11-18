import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_URL = 'auth/SET_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    url: ""
}


export const authReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_URL:
            return {
                ...state,
                url: action.url,
                captcha: action.captcha
            };

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const setSecutity = (url) => ({ type: SET_URL, url })

//thunk
export const getAuth = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuth()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
            dispatch(setSecutity(""));
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', { _error: message }))
        }

        if (response.data.resultCode === 10)
            dispatch(security());
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0)
        dispatch(setAuthUserData(null, null, null, false));


}
export const security = () => async (dispatch) => {

    let response = await authAPI.security();
    dispatch(setSecutity(response.data.url));
}

export default authReduser;