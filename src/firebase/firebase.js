import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQDQYpm-TybNHpj3yAdXksX2zWDAZXD7I",
  authDomain: "e-commerce-c1b8d.firebaseapp.com",
  databaseURL: "https://e-commerce-c1b8d.firebaseio.com",
  projectId: "e-commerce-c1b8d",
  storageBucket: "e-commerce-c1b8d.appspot.com",
  messagingSenderId: "726688273995",
  appId: "1:726688273995:web:55890a9859367b12899fce",
  measurementId: "G-1TMHN2PF0T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth};
