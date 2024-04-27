// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ6NKasM5hkYwB_lRodBg0PFuf-v99Gws",
  authDomain: "awesome-project-noah.firebaseapp.com",
  projectId: "awesome-project-noah",
  storageBucket: "awesome-project-noah.appspot.com",
  messagingSenderId: "462808501703",
  appId: "1:462808501703:web:a7698317398b387edf5de2",
  measurementId: "G-TJTH4LKR1N"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);