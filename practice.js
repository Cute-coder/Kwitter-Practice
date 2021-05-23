// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBEIslJDC24VsYfLMZkgsXg4GqlcQumAiI",
    authDomain: "kwitter-c-94.firebaseapp.com",
    databaseURL: "https://kwitter-c-94-default-rtdb.firebaseio.com",
    projectId: "kwitter-c-94",
    storageBucket: "kwitter-c-94.appspot.com",
    messagingSenderId: "303130395801",
    appId: "1:303130395801:web:976a7f8e965bbb46d1e408"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }
  