


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDACDXPOAnAQzBoDTqyNnQ83w6G5IXgklE",
  authDomain: "kwitter-9cff7.firebaseapp.com",
  databaseURL: "https://kwitter-9cff7-default-rtdb.firebaseio.com",
  projectId: "kwitter-9cff7",
  storageBucket: "kwitter-9cff7.appspot.com",
  messagingSenderId: "12093097604",
  appId: "1:12093097604:web:d3454c17485da5d88e24d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(" Room Name -" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
  room_name =  document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",  room_name);

  window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html";
}

