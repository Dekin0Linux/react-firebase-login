// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyDlT3beK683Yjh4Pr3V-OEyakg0VucDs",
  authDomain: "reactlogin-11615.firebaseapp.com",
  projectId: "reactlogin-11615",
  storageBucket: "reactlogin-11615.appspot.com",
  messagingSenderId: "211625933695",
  appId: "1:211625933695:web:b48e5489dda1311955384a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)