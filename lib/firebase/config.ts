// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDemNzBof49Bvn8NMFrYvQxsTSwTYGAWm0",
  authDomain: "tiansienz.firebaseapp.com",
  projectId: "tiansienz",
  storageBucket: "tiansienz.appspot.com",
  messagingSenderId: "1082537043683",
  appId: "1:1082537043683:web:229618f85586df2cb447d6",
  measurementId: "G-ZB3DMPBHMH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
