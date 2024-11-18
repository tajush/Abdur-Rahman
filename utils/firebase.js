// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvkq_MZUaFuXHzfvPVAeEsOYKNYEIw5cA",
    authDomain: "rt-ca-blog-view-count.firebaseapp.com",
    projectId: "rt-ca-blog-view-count",
    storageBucket: "rt-ca-blog-view-count.appspot.com",
    messagingSenderId: "76950143297",
    appId: "1:76950143297:web:007437561564c2a422e1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);


export { db };
