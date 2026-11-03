// Из этого файла GitHub собирает web/firebase.js (Firebase SDK одним файлом)
export { initializeApp } from "firebase/app";
export { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
export { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, memoryLocalCache, collection, doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore";
