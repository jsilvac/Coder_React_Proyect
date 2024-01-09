
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCx0evVWfPnrEw9Kg_M2vejSmcAq0upipk",
  authDomain: "coderreactjs-95993.firebaseapp.com",
  projectId: "coderreactjs-95993",
  storageBucket: "coderreactjs-95993.appspot.com",
  messagingSenderId: "95659899365",
  appId: "1:95659899365:web:4e7cf3ac25bd727b1bd70c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)