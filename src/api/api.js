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
        return instance.get(`profile/${id}`)
            .then(res => {
                return res.data
            })
    }
}