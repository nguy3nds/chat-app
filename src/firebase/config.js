import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD7k-6J09mYFLqTRuGi0kiInIMRVd2XXg",
  authDomain: "chat-app-9711b.firebaseapp.com",
  projectId: "chat-app-9711b",
  storageBucket: "chat-app-9711b.appspot.com",
  messagingSenderId: "752862994948",
  appId: "1:752862994948:web:7df9100842156e3b500b51",
  measurementId: "G-6LGN6GR5JY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// auth.useEmulator("http://localhost:9099");
// if (window.location.hostname === "localhost") {
//   db.useEmulator("localhost", 8080);
// }

export { db, auth };

export default firebase;
