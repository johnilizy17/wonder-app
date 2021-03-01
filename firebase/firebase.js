import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHFCR-GCje0-WNcA6UaG4-PbwetDi-oy8',
  authDomain: 'wonder-app-46d97.firebaseapp.com',
  projectId: 'wonder-app-46d97',
  storageBucket: 'wonder-app-46d97.appspot.com',
  messagingSenderId: '265677567208',
  appId: '1:265677567208:web:1483432d62e1efe5ef855d',
  measurementId: 'G-9062865BC2'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const provider2 = new firebase.auth.FacebookAuthProvider();

export {
  db, auth, provider, provider2
};
