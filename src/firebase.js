import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDELiGhnE7IhYWWMfdrJxytbkinZw33ohU",
    authDomain: "linkedin-clone-st1.firebaseapp.com",
    projectId: "linkedin-clone-st1",
    storageBucket: "linkedin-clone-st1.appspot.com",
    messagingSenderId: "681269130790",
    appId: "1:681269130790:web:9e97a70fa180ff751718e7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };