//YOUR FIREBASE LINKS
const firebaseConfig = { apiKey: "AIzaSyA0vme5ODgeDmrnqjbwLZW0X4nrOGN1N4I", authDomain: "kwiter-104b6.firebaseapp.com", databaseURL: "https://kwiter-104b6-default-rtdb.firebaseio.com", projectId: "kwiter-104b6", storageBucket: "kwiter-104b6.appspot.com", messagingSenderId: "167863794317", appId: "1:167863794317:web:adbea719be32e83ff980c4" }; // Initialize Firebase const app = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";

}