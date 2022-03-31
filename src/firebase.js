// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCReOvKFYBGJytB4VdzQoO2PtAlxWsAudk",
    authDomain: "clone-ec5c8.firebaseapp.com",
    projectId: "clone-ec5c8",
    storageBucket: "clone-ec5c8.appspot.com",
    messagingSenderId: "578433548300",
    appId: "1:578433548300:web:b3ff0f7ddd17441249ae29",
    measurementId: "G-GXCW3JXEGF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};