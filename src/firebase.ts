import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKqvfLO4uoTA2sZZxtZ5ikxQALkJJ2CLw",
    authDomain: "todo-3be2c.firebaseapp.com",
    projectId: "todo-3be2c",
    storageBucket: "todo-3be2c.firebasestorage.app",
    messagingSenderId: "19189758468",
    appId: "1:19189758468:web:425b6c9daa843d8abcd351"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export const auth = getAuth(app);
  export default db;