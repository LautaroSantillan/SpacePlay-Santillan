// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIxlQM4xbZsWdaJE9cMwySvLJGjXAo5Qo",
    authDomain: "spaceplay-e.firebaseapp.com",
    projectId: "spaceplay-e",
    storageBucket: "spaceplay-e.appspot.com",
    messagingSenderId: "610506124295",
    appId: "1:610506124295:web:d9847e23ddb5e302e48ea2",
    measurementId: "G-REL28C5PG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);