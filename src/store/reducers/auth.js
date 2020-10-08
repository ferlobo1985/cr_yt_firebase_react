const INITIAL_STATE = {
    user: null,
    isAuth: false
}

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case 'AUTH_USER':
            return {...state, ...action.payload }
        case 'LOGOUT_USER':
            return {...state,user: null, isAuth: false }
        default:
            return state
    }   
}