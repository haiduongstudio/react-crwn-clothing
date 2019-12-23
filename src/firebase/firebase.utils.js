import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDeaVbRa99X55CU_1TpMUgqwrPqceNApmQ',
  authDomain: 'crwn-db-be01f.firebaseapp.com',
  databaseURL: 'https://crwn-db-be01f.firebaseio.com',
  projectId: 'crwn-db-be01f',
  storageBucket: 'crwn-db-be01f.appspot.com',
  messagingSenderId: '958783785282',
  appId: '1:958783785282:web:e98f6df85fcacaf180e0db'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
