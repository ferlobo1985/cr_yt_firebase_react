import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyDm-cBda52og0hDDInoC0jJhVoiNgTQnGY",
    authDomain: "msgapp-aa26a.firebaseapp.com",
    databaseURL: "https://msgapp-aa26a.firebaseio.com",
    projectId: "msgapp-aa26a",
    storageBucket: "msgapp-aa26a.appspot.com",
    messagingSenderId: "377722891820",
    appId: "1:377722891820:web:c4dcbfab4aab6ae6de2b89",
    measurementId: "G-796KYC8NEY"
}

const fBaseApp = firebase.initializeApp(config);