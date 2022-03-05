const firebaseConfig = {
    apiKey: "AIzaSyC9yrsnKcombTNQJrEm7lKBZ7tQEmRsgdQ",
    authDomain: "lets-chat-app-692ee.firebaseapp.com",
    databaseURL: "https://lets-chat-app-692ee-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-692ee",
    storageBucket: "lets-chat-app-692ee.appspot.com",
    messagingSenderId: "386109619849",
    appId: "1:386109619849:web:2f484174d3a1bc73305058",
    measurementId: "G-MRJ42KH0DP"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");