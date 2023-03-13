import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "taskingo-3a7cd.firebaseapp.com",
  databaseURL: "https://taskingo-3a7cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "taskingo-3a7cd",
  storageBucket: "taskingo-3a7cd.appspot.com",
  messagingSenderId: "901889173137",
  appId: "1:901889173137:web:ec4549755289c694118130",
  measurementId: "G-8P67T76EYF",
};

initializeApp(firebaseConfig);
