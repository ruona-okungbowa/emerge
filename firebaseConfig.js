// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi4tklnD8ijCc0af_MUorkr0dXtqE-3QQ",
  authDomain: "emerge-79db5.firebaseapp.com",
  projectId: "emerge-79db5",
  storageBucket: "emerge-79db5.firebasestorage.app",
  messagingSenderId: "1044584468672",
  appId: "1:1044584468672:web:e6ddf9949ab42435e45d25",
  measurementId: "G-77RL2LBMJX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
