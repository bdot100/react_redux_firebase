import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  var firebaseConfig = {
    apiKey: "AIzaSyBSghSghTd89r_SSyNfyV51rpeFlgr6c_8",
    authDomain: "marioplantest-58c51.firebaseapp.com",
    databaseURL: "https://marioplantest-58c51.firebaseio.com",
    projectId: "marioplantest-58c51",
    storageBucket: "marioplantest-58c51.appspot.com",
    messagingSenderId: "557490755428",
    appId: "1:557490755428:web:55323801210b5c721f4c71",
    measurementId: "G-6BP43BVMMT"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
