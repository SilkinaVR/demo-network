import *as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "7d396079-5991-4925-9a3b-fe2bf5ecfc30" }
});

export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return (
            instance.get(`users?page=${pageNumber}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        )
    },
    follow(id) {
        return (instance.post(`follow/${id}`)
            .then(response => {
                return response.data;

            }))

    },
    unfollow(id) {
        return (instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;

            }))

    },
    getProfile(id) {
        return profileAPI.getProfile(id);
    }
}
export const profileAPI = {
    getProfile(id) {
        return (
            instance.get(`profile/` + id)
                .then(response => {
                    return response.data
                }))
    },
    getStatus(id) {
        return (
            instance.get(`profile/status/` + id)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status/`, { status: status })
        )
    },
    saveProfile(profile) {
        return (
            instance.put(`profile`, profile)
        )
    },
    setPhoto(filePhoto) {
        let formData = new FormData();
        formData.append("image", filePhoto)
        return (
            instance.put(`profile/photo`, formData,
                { headers: { 'Content-Type': 'multipart/form-data' } })
        )
    }
}
export const authAPI = {
    getAuth() {

        return (
            instance.get(`auth/me`)
                .then(response => {
                    return response.data
                }))
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    security() {
        return (
            instance.get(`security/get-captcha-url`)
        )
    }
}

