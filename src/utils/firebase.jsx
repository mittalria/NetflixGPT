// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlzGLpiUDDq9jiBWBAkmIoaVkEC9w0fhk",
  authDomain: "netflix-gpt-8e256.firebaseapp.com",
  projectId: "netflix-gpt-8e256",
  storageBucket: "netflix-gpt-8e256.firebasestorage.app",
  messagingSenderId: "990436278309",
  appId: "1:990436278309:web:b66b2266647c3bde8c3fcc",
  measurementId: "G-ZE1SY55FQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
