// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC424OYNCsJUJbbOmVdrHiIDQQ-wYP5s88",
  authDomain: "test-bc8f4.firebaseapp.com",
  projectId: "test-bc8f4",
  storageBucket: "test-bc8f4.appspot.com",
  messagingSenderId: "995202993323",
  appId: "1:995202993323:web:bdf5cd13cf5e4274d1bbee",
  measurementId: "G-J5SL0K9X6X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
