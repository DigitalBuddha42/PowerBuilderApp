// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAxwziOGc2CNi4T3pXm2dYOFdjrtHIxXk",
  authDomain: "powerbuilder-3c0f5.firebaseapp.com",
  projectId: "powerbuilder-3c0f5",
  storageBucket: "powerbuilder-3c0f5.firebasestorage.app",
  messagingSenderId: "126547282237",
  appId: "1:126547282237:web:7f149e0605f33fae97dd54",
  measurementId: "G-KL017C50MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);