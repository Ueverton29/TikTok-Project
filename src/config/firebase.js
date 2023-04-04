
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCvG94zfrT5kNFNk2e-F5zARA0jxwWvkiM",
  authDomain: "tiktok----jornada-63ae7.firebaseapp.com",
  projectId: "tiktok----jornada-63ae7",
  storageBucket: "tiktok----jornada-63ae7.appspot.com",
  messagingSenderId: "263117800372",
  appId: "1:263117800372:web:908c28dab5852eb2e728e1",
  measurementId: "G-HZ7PKB4CS9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 