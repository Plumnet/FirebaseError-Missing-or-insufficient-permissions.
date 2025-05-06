import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxl--EEcrKfsS3iV9ksDB35bSJiT0RjCs",
    authDomain: "repotodo-f9474.firebaseapp.com",
    projectId: "repotodo-f9474",
    storageBucket: "repotodo-f9474.firebasestorage.app",
    messagingSenderId: "323326373173",
    appId: "1:323326373173:web:85f42433ed65868145f07c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export const auth = getAuth(app);
  export default db;