import firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };


  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  export default database;