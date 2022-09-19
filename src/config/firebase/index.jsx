// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGeOY_OGAqB7Pk9EgU9qWnMdESg9r5Bp4",
  authDomain: "product-bdc6a.firebaseapp.com",
  projectId: "product-bdc6a",
  storageBucket: "product-bdc6a.appspot.com",
  messagingSenderId: "2501710125",
  appId: "1:2501710125:web:a104aaae03b550361483a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFb = app.auth();
