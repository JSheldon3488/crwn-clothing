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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //Check if user document already exists
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    // No user data so set up a document
    if (!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date();
      try {
          await userRef.set({
              displayName: displayName,
              email: email,
              createdAt: createdAt,
              ...additionalData
          });
      } catch (err) {
          console.log('error creating user', err.message);
      }
    }

    return userRef;
};

export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: []});
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const trnsformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return trnsformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}
    
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;