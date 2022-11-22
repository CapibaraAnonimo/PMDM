// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdj7hxv9xiUVXf9bo1g_BJxmyH-HecEvk',
  authDomain: 'tmdb-firebase-aa74d.firebaseapp.com',
  databaseURL: 'https://tmdb-firebase-aa74d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'tmdb-firebase-aa74d',
  storageBucket: 'tmdb-firebase-aa74d.appspot.com',
  messagingSenderId: '1026947791103',
  appId: '1:1026947791103:web:1a98fbac81685e0da234ca',
  measurementId: 'G-GLSV88GX0P'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment = {
  firebase: {
    projectId: 'tmdb-firebase-aa74d',
    appId: '1:1026947791103:web:1a98fbac81685e0da234ca',
    databaseURL: 'https://tmdb-firebase-aa74d-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'tmdb-firebase-aa74d.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyCdj7hxv9xiUVXf9bo1g_BJxmyH-HecEvk',
    authDomain: 'tmdb-firebase-aa74d.firebaseapp.com',
    messagingSenderId: '1026947791103',
    measurementId: 'G-GLSV88GX0P',
  },
  production: true,
};
