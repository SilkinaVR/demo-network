import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getPageCount = (state) => {
    return state.usersPage.pageCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFething = (state) => {
    return state.usersPage.isFething
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}



