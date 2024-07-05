
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSiAkdZEp5EOjuQ9LylXTCBHX3weiOKnw",
  authDomain: "reactlinks-b7451.firebaseapp.com",
  projectId: "reactlinks-b7451",
  storageBucket: "reactlinks-b7451.appspot.com",
  messagingSenderId: "970502059138",
  appId: "1:970502059138:web:5590a777830a2d5e3bb09b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };