


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-I2EatZMWnBDasvqRd9svEhUO3Rs4lOY",
  authDomain: "blogplatform-8f233.firebaseapp.com",
  projectId: "blogplatform-8f233",
  storageBucket: "blogplatform-8f233.appspot.com",
  messagingSenderId: "339511224098",
  appId: "1:339511224098:web:b95e7ac432cfe5ae6ca77b",
  measurementId: "G-WQRKLWZTPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
