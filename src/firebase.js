import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLsWGsVrNB7Yu7gk9-Vk_LKbH7Hplfz10",
  authDomain: "miniconf-d8df7.firebaseapp.com",
  projectId: "miniconf-d8df7",
  storageBucket: "miniconf-d8df7.appspot.com",
  messagingSenderId: "57160507247",
  appId: "1:57160507247:web:0e734860a7db07dbe4129a",
  measurementId: "G-V57PDPK6PL",
};

firebase.initializeApp(firebaseConfig);
