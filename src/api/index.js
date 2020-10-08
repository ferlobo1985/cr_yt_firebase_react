import firebase from 'firebase/app'

import { usersCollection } from '../fbase';

export const registerUser = async({email, password}) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
        const {user} = response;

        const userProfile = {
            uid:user.uid,
            email: email
        }
        await usersCollection.doc(user.uid).set(userProfile);
        return { isAuth: true, user:userProfile }
    } catch(error){
        return { error: error.message }
    }
}

export const loginUser = ({email, password}) => (
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then( response => {
        //console.log(response.user);
        return {
            isAuth: true, 
            user:{
                uid: response.user.uid,
                email: response.user.email
            } 
        }
    }).catch(error=> {
        return { error: error.message }
    })
)
