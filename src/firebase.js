import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import  "firebase/compat/firestore";
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyD3qnM9pobJl0CBUObF3v6YOdLbrh-Gihw",
    authDomain: "linkdin-clone-4254e.firebaseapp.com",
    projectId: "linkdin-clone-4254e",
    storageBucket: "linkdin-clone-4254e.appspot.com",
    messagingSenderId: "60132582045",
    appId: "1:60132582045:web:eeeb810a653b9fa5482a74"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider , storage}
  export default db;
