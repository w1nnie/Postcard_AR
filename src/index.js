    
    // Sassを相対パスでimport文で読み込む
    import "./style.scss"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByfm1aAZZ9FbKllATBUb3XbtoN8jdUfI4",
  authDomain: "postcard-ar.firebaseapp.com",
  projectId: "postcard-ar",
  storageBucket: "postcard-ar.appspot.com",
  messagingSenderId: "1009468939253",
  appId: "1:1009468939253:web:04628230c7bbae046f9ebc",
  measurementId: "G-76X3LY96LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);