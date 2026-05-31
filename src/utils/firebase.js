// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCvjRrZnL1era0VHe2vGThQfeq1g-4Y2M",
  authDomain: "netflixgpt-963e3.firebaseapp.com",
  projectId: "netflixgpt-963e3",
  storageBucket: "netflixgpt-963e3.firebasestorage.app",
  messagingSenderId: "1090985866115",
  appId: "1:1090985866115:web:ff8dfe5a2d0df599183cb6",
  measurementId: "G-EGBNYEYE3X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
