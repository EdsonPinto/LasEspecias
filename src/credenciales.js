// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_YmUcDWptOg2RX3o4K4EGt2Eyxpwygkk",
  authDomain: "las-especias-34fd1.firebaseapp.com",
  projectId: "las-especias-34fd1",
  storageBucket: "las-especias-34fd1.appspot.com",
  messagingSenderId: "694497972523",
  appId: "1:694497972523:web:e96b01a564b79b0686356e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;