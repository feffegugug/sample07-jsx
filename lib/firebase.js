// lib/firebase.js
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCfoP9cYprL5x2I9X4dzPDLzfiUachWNt4",
    authDomain: "sample07-bfd7e.firebaseapp.com",
    projectId: "sample07-bfd7e",
    storageBucket: "sample07-bfd7e.firebasestorage.app",
    messagingSenderId: "979699984492",
    appId: "1:979699984492:web:7e0ce03e537f29eb25d049",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
