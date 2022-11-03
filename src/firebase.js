// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBozN5I99QKTYETr35wqEAcGm4CJtB87Po",
  authDomain: "auth-car-booking-app.firebaseapp.com",
  projectId: "auth-car-booking-app",
  storageBucket: "auth-car-booking-app.appspot.com",
  messagingSenderId: "339105332830",
  appId: "1:339105332830:web:231165315defce346ebecf",
  measurementId: "G-94X7FPVDT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);