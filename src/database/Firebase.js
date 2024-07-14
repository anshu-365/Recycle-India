//app name:firebase_bd 
// project name:firebasedb

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKxmpHjfhr9Rd9CR7rwX6j36G7DZ2dn58",
  authDomain: "recycledb-9302d.firebaseapp.com",
  projectId: "recycledb-9302d",
  storageBucket: "recycledb-9302d.appspot.com",
  messagingSenderId: "605123148994",
  appId: "1:605123148994:web:88f79cb678547d2ccd0f5b",
  measurementId: "G-34KWETX1WF"
};

const app = initializeApp(firebaseConfig);// Initialize Firebase

const auth=getAuth();
export{app,auth};
