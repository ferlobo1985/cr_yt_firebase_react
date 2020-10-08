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
