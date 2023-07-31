import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4ZLTobpKGu-cDJlUypUaLUl6KAksffuc",
  authDomain: "signal-clone-3a7e1.firebaseapp.com",
  projectId: "signal-clone-3a7e1",
  storageBucket: "signal-clone-3a7e1.appspot.com",
  messagingSenderId: "798928266360",
  appId: "1:798928266360:web:78c34bc0d0ff0a27dcb98d",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
