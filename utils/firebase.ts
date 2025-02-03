// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAxwziOGc2CNi4T3pXm2dYOFdjrtHIxXk",
  authDomain: "powerbuilder-3c0f5.firebaseapp.com",
  projectId: "powerbuilder-3c0f5",
//   storageBucket: "powerbuilder-3c0f5.firebasestorage.app",
storageBucket: "powerbuilder-3c0f5.appspot.com",
  messagingSenderId: "126547282237",
  appId: "1:126547282237:web:7f149e0605f33fae97dd54",
  measurementId: "G-KL017C50MT"
};

// Initialize Firebase only if it hasn't been initialized already
 const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

 // Initialize Firebase services
 const auth = getAuth(app);
 const db = getFirestore(app);
 console.log("Initializing Firebase...");
 console.log(getApps().length > 0 ? "Firebase already initialized" : "Initializing new Firebase app");


 export { auth, db };