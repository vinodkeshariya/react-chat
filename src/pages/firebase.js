import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLXvziEN2wtJyH1ASLFwaeXIyTBbit1bU",
  authDomain: "react-chat-app-c143c.firebaseapp.com",
  projectId: "react-chat-app-c143c",
  storageBucket: "react-chat-app-c143c.appspot.com",
  messagingSenderId: "994283439217",
  appId: "1:994283439217:web:13b8a440253a42d0ff47d0",
  measurementId: "G-C645ZS8262"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
