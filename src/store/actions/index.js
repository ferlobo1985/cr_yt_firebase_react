import * as api from '../../api';

export const registerUser = (userData) => ({
    type:'AUTH_USER',
    payload:  api.registerUser(userData)
})

export const loginUser = (userData) => ({
    type:'AUTH_USER',
    payload:  api.loginUser(userData)
})

export const autoSignIn = () => ({
    type:'AUTH_USER',
    payload:  api.autoSignIn()
})

export const logoutUser = () => ({
    type:'LOGOUT_USER',
    payload:  api.logoutUser()
})

export const addMessage = (data,user) => ({
    type:'ADD_MESSAGE',
    payload:  api.addMessage(data,user)
})

export const fetchPosts = () => ({
    type:'FETCH_POSTS',
    payload:  api.fetchPosts()
})


