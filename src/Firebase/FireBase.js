// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_4WsXDgpDm67xGDinsUFYgQrVTAFL1w0",
  authDomain: "fitness-5a720.firebaseapp.com",
  projectId: "fitness-5a720",
  storageBucket: "fitness-5a720.firebasestorage.app",
  messagingSenderId: "760265351776",
  appId: "1:760265351776:web:df3a0406d250e511691905",
  measurementId: "G-TZG1TRTJC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();