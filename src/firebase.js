import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDyh53rjAeqsN4MvZy1fhK6x38Qkn4T0AY",
    authDomain: "deadline-17bb4.firebaseapp.com",
    databaseURL: "https://deadline-17bb4-default-rtdb.firebaseio.com",
    projectId: "deadline-17bb4",
    storageBucket: "deadline-17bb4.appspot.com",
    messagingSenderId: "14443229871",
    appId: "1:14443229871:web:196a388869cbc671f2da5a",
    measurementId: "G-3F1M9H9KTB"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;