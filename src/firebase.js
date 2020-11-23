import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyC8DYL9DpSHylFMcBZv2eyig5hwNMstu0M",
    authDomain: "react-crud-1267e.firebaseapp.com",
    databaseURL: "https://react-crud-1267e.firebaseio.com",
    projectId: "react-crud-1267e",
    storageBucket: "react-crud-1267e.appspot.com",
    messagingSenderId: "138176104914",
    appId: "1:138176104914:web:e345f81550763cce54600b"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
 
  export default fireDb.database().ref();