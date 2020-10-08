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
        case 'ADD_MESSAGE':
            return {...state, lastMsgAdded: action.payload }
        case 'FETCH_POSTS':
            return {...state, ...action.payload }
        default:
            return state
    }   
}