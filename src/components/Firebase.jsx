import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGsm2n4Lq7h8xrE7WFfs7jw8eSf1L10Ac",
    authDomain: "e-commerce-862000.firebaseapp.com",
    databaseURL: "https://e-commerce-862000-default-rtdb.firebaseio.com",
    projectId: "e-commerce-862000",
    storageBucket: "e-commerce-862000.appspot.com",
    messagingSenderId: "652528758185",
    appId: "1:652528758185:web:0cde9813ea2e8ffe44e8b8"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};