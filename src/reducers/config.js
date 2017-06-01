import firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAEDBAKsVC1eMFTmU0wPRHBMNkkkIE9rxY",
    authDomain: "mnichovcanpoint.firebaseapp.com",
    databaseURL: "https://mnichovcanpoint.firebaseio.com",
    projectId: "mnichovcanpoint",
    storageBucket: "mnichovcanpoint.appspot.com",
    messagingSenderId: "1064954461967"
  };


  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  export default database;