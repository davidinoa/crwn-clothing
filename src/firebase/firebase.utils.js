import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCovoqql83jfMtu7nZhNyguVrw00a11cFg',
  authDomain: 'crwn-db-dil.firebaseapp.com',
  databaseURL: 'https://crwn-db-dil.firebaseio.com',
  projectId: 'crwn-db-dil',
  storageBucket: '',
  messagingSenderId: '626793475190',
  appId: '1:626793475190:web:fc02445f700e92f8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
