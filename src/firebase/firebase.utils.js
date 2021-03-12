import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB0hI7cal677FYB9a_O6dT43a1YdshNe-c",
    authDomain: "crwn-db-29f53.firebaseapp.com",
    projectId: "crwn-db-29f53",
    storageBucket: "crwn-db-29f53.appspot.com",
    messagingSenderId: "866961039684",
    appId: "1:866961039684:web:6707ccc420a6502334b711",
    measurementId: "G-XZSZR6RM13"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;