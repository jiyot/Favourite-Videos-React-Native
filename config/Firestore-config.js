// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjmvInFvzWm_Fjjz3TP209Qhf5kQUx10Y",
  authDomain: "mads4006projectg10.firebaseapp.com",
  projectId: "mads4006projectg10",
  storageBucket: "mads4006projectg10.appspot.com",
  messagingSenderId: "928972308224",
  appId: "1:928972308224:web:53196d26764a413539bde5",
  measurementId: "G-BQS0Y64VY1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);