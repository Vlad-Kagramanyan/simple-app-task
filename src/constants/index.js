import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// import { initializeApp } from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNnKUAeR_VJrll_6q18BxzGBWxjsmYUW0',
  authDomain: 'simple-app-df2cd.firebaseapp.com',
  projectId: 'simple-app-df2cd',
  storageBucket: 'simple-app-df2cd.appspot.com',
  messagingSenderId: '1067062806186',
  appId: '1:1067062806186:web:2dd14a344249cfdc9db2d3',
  measurementId: 'G-WCKXL5XZ2D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
