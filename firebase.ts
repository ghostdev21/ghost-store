// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqSkNeCjqSCTMAXhQbGXFcSwQzviTPd7E",
  authDomain: "ghost-store-130ee.firebaseapp.com",
  projectId: "ghost-store-130ee",
  storageBucket: "ghost-store-130ee.appspot.com",
  messagingSenderId: "834463063751",
  appId: "834463063751:web:99d299eac2f6318597a8e2",
  measurementId: "G-LLBD29PZYZ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)