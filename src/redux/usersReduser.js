import { usersAPI } from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_PAGE_COUNT = 'users/SET_PAGE_COUNT';
const TOGGOLE_IS_FETHING = 'users/TOGGOLE_IS_FETHING';
const TOGGOLE_IS_FOLLOWING_PROGRESS = 'users/TOGGOLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    users: [],
    pageSize: 10,
    pageCount: 0,
    currentPage: 1,
    isFething: false,
    followingInProgress: []
}

export const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {
                            ...u, followed: true
                        }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {
                            ...u, followed: false
                        }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case SET_PAGE_COUNT:
            return { ...state, pageCount: action.count }
        case TOGGOLE_IS_FETHING:
            return { ...state, isFething: action.isFething }
        case TOGGOLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFething
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setPageCount = (countTotal) => ({ type: SET_PAGE_COUNT, count: countTotal })
export const setFething = (isFething) => ({ type: TOGGOLE_IS_FETHING, isFething })
export const toggleFollowingProgress = (isFething, userId) => ({ type: TOGGOLE_IS_FOLLOWING_PROGRESS, isFething, userId })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFething(true));

    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setFething(false));
    dispatch(setUsers(data.items));
    dispatch(setPageCount(data.totalCount));

}
const followUnfollowFlow = async (dispatch, usersId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProgress(true, usersId));

    const data = await apiMethod(usersId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(usersId))
    }
    dispatch(toggleFollowingProgress(false, usersId));

}
export const follow = (usersId) => async (dispatch) => {

    followUnfollowFlow(dispatch, usersId, usersAPI.follow.bind(usersId), followSuccess)
}
export const unfollow = (usersId) => async (dispatch) => {
    followUnfollowFlow(dispatch, usersId, usersAPI.unfollow.bind(usersId), unfollowSuccess)



}
export default usersReduser;