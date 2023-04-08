import firebase from 'firebase';
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  databaseURL: process.env.REACT_DATABASE_URL,
  projectId: process.env.REACT_PROJETC_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
});

const db = getFirestore(app);

export { db };