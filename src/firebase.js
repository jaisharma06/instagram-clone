// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArffK2t4LDC-C2fAAwuH2KP1dSoFHpElc",
  authDomain: "instagram-clone-117da.firebaseapp.com",
  projectId: "instagram-clone-117da",
  storageBucket: "instagram-clone-117da.appspot.com",
  messagingSenderId: "711796009965",
  appId: "1:711796009965:web:42dd5281d8e0db3ade95e4",
  measurementId: "G-7JK7X1ZVQQ",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
