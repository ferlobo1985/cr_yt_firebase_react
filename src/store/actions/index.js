import * as api from '../../api';


export const registerUser = (userData) => ({
    type:'AUTH_USER',
    payload: api.registerUser(userData)
})