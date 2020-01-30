import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCnq6-HQ_QXUx-Wm74TfPt2hc_t3l6P7c",
    authDomain: "crwn-clothing-db-44998.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-44998.firebaseio.com",
    projectId: "crwn-clothing-db-44998",
    storageBucket: "crwn-clothing-db-44998.appspot.com",
    messagingSenderId: "988747960021",
    appId: "1:988747960021:web:448e81041667e9a6135c5c",
    measurementId: "G-J5EVTL2RPK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
    .setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;