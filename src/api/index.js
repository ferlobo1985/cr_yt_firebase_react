import firebase from 'firebase/app'

import { usersCollection, postsCollection } from '../fbase';

const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

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


export const autoSignIn = () => (
    new Promise((resolve, reject)=>{
        firebase.auth().onAuthStateChanged( user => {
            if(user){
                usersCollection.doc(user.uid).get().then( snapshot => {
                    resolve({ isAuth: true, user:snapshot.data() })
                });
            } else {
                resolve({ isAuth: false, user:null })
            }
        })
    })
)


export const logoutUser = () => (
    firebase.auth().signOut()
)

export const addMessage = (data,user) => (
    postsCollection.add({
        ...data,
        createdAt:serverTimestamp(),
        author:{
            ownerId: user.uid,
            email: user.email
        }
    }).then( docRef =>{
        return docRef.id
    }).catch( err =>{
        return err
    })
)

export const fetchPosts = async() => {
    try{
        const snapshot = await postsCollection.get();
        const posts = snapshot.docs.map( doc => ({
            id: doc.id, ...doc.data()
        }));

        return { homePosts: posts }
    }catch(error){
        return { error: error.message }
    }
}