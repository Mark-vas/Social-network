import *as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '3dbe0b58-fdcc-4ce3-8eb7-eee6fefd0906' }
})

export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users/?page=${currentPage}`)
            .then(res => {
                return res.data
            })
    },
    getMeProfile() {
        return instance.get('auth/me')
            .then(res => {
                // debugger
                return res.data
            })
    },
    postFollow(id) {
        return instance.post(`follow/${id}`)
            .then(res => {
                return res.data
            })
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(res => {
                return res.data
            })
    },
    getProfilePage(id) {
        console.log('Изменил название запроса страницы Юзера')
        return profileAPI.getProfilePage(id)
    }
}

export const profileAPI = {
    getProfilePage(id) {
        return instance.get(`profile/${id}`)
            .then(res => {
                return res.data
            })
    },
    getProfileStatus(id) {
        // debugger
        return instance.get(`profile/status/${id}`)
            .then(res => {
                // debugger
                return res.data
            })
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
            .then(res => {
                // debugger
                return res.data
            })
    }
}

export const authAPI = {
    postAuthUser() {
        return instance.post('auth/login', {})
            .then(res => {
                debugger
            })
    }
}