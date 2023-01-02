


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVO8YuIE7Bo9Zq53GACL0DwOPwlbDaE2Y",
  authDomain: "kwitter1-665dd.firebaseapp.com",
  databaseURL: "https://kwitter1-665dd-default-rtdb.firebaseio.com",
  projectId: "kwitter1-665dd",
  storageBucket: "kwitter1-665dd.appspot.com",
  messagingSenderId: "596536167366",
  appId: "1:596536167366:web:542a7fbe7feae36ac940c7"
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

