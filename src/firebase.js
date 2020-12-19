// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBllloqifqtY0eWS9cNtb8f3olqO6rwRG0",
  authDomain: "meme-gen-32155.firebaseapp.com",
  projectId: "meme-gen-32155",
  storageBucket: "meme-gen-32155.appspot.com",
  messagingSenderId: "683028133306",
  appId: "1:683028133306:web:cbc53abb337a313e8f5983",
  measurementId: "G-S582X45J8S",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
