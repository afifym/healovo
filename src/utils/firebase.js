import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAvhrEd58Qmg_adFoaLwEjkemym4EKUD3s',
  authDomain: 'healovo.firebaseapp.com',
  databaseURL: 'https://healovo-default-rtdb.firebaseio.com',
  projectId: 'healovo',
  storageBucket: 'healovo.appspot.com',
  messagingSenderId: '142171972024',
  appId: '1:142171972024:web:09b72a0fc03c5f9bb9ef4d',
  measurementId: 'G-NZEYQQLWJW',
};

firebase.initlializeApp(firebaseConfig);
export default firebase;
