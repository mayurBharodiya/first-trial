import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZPF19M3dZTLl3uvf9kfCtxGuS3acIk1c",
  authDomain: "todo0-6f799.firebaseapp.com",
  databaseURL: "https://todo0-6f799.firebaseio.com",
  projectId: "todo0-6f799",
  storageBucket: "todo0-6f799.appspot.com",
  messagingSenderId: "575371056772",
  appId: "1:575371056772:web:1607847399b453fd0654d1",
  measurementId: "G-6DTHMT6WWN",
});

const db = firebaseApp.firestore();

export default db;
