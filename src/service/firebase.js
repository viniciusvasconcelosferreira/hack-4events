import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  databaseURL: process.env.REACT_DATABASE_URL,
  projectId: process.env.REACT_PROJETC_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('/interesses').once('value')
  .then((snapshot) => {
    const data = snapshot.val();
    // faça algo com os dados lidos do banco de dados
    console.log('data');
  });

