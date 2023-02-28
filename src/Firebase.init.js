// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZa7BmyTfF8x7M3pOVSlDLw1nuwFizDKU",
  authDomain: "yan-horizon.firebaseapp.com",
  projectId: "yan-horizon",
  storageBucket: "yan-horizon.appspot.com",
  messagingSenderId: "75563914763",
  appId: "1:75563914763:web:04fd9bceef3023bba6190e",
  /* apiKey: "AIzaSyCc6NazLkxb1ZAuhTWuuvubU1-kVxkVhgM",
  authDomain: "yan-horizon-4d76f.firebaseapp.com",
  projectId: "yan-horizon-4d76f",
  storageBucket: "yan-horizon-4d76f.appspot.com",
  messagingSenderId: "807570554378",
  appId: "1:807570554378:web:10a95a31aac1193283e9f3" */
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;