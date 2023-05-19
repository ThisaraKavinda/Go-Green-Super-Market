import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkpody_sVqvshoSt3YT8DK-WBEn6K76cQ",
    authDomain: "clean-city-a4395.firebaseapp.com",
    projectId: "clean-city-a4395",
    storageBucket: "clean-city-a4395.appspot.com",
    messagingSenderId: "567329000639",
    appId: "1:567329000639:web:d8dd24d1270a5cc011ca0a"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;