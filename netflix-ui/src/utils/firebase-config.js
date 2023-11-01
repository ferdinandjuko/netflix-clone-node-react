// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwYPbKJqgQzmLZQS7rDiaDV5p-99PtuTs",
  authDomain: "react-netflix-clone-72986.firebaseapp.com",
  projectId: "react-netflix-clone-72986",
  storageBucket: "react-netflix-clone-72986.appspot.com",
  messagingSenderId: "551632083484",
  appId: "1:551632083484:web:10f263ab9b51988c42ddd9",
  measurementId: "G-K4TV8NYWKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);