const firebaseConfig = {
    apiKey: "AIzaSyAdLqw2SLivfTPhlD1SLjVc5SP_4RLywrY",
    authDomain: "projetovamosconversar-fcc03.firebaseapp.com",
    projectId: "projetovamosconversar-fcc03",
    storageBucket: "projetovamosconversar-fcc03.appspot.com",
    messagingSenderId: "1074573976545",
    appId: "1:1074573976545:web:b261f935f833da1a1b68a0",
    measurementId: "G-1RLJYC1PVD"
  };
//firebase.initializeApp(firebaseConfig);
//var database = firebase.database();
function carregar(){
  var nome =  localStorage.getItem("nUsuario");
  document.getElementById("nome").innerHTML = nome;
}
var NomeDeSala = console.log;
function addRoom(){
   NomeDeSala = document.getElementById("IpSala").value;
}
function getData(){
  firebase.database().ref("/").on('value', 
  function(snapshot){
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot){
      childKey = childSnapshot.key;
    
      roomNames = childKey;
      line = "<div id="+roomNames+" onclick='redirectToRoomName(this.id)' >"+roomNames+"</div><hr>";
      childKey +=line;
    });
    document.getElementById("output").innerHTML = childKey;
  });
}

function redirectToRoomName() {
  localStorage.setItem("NomeDeSala", roomNames);
  window.location = 'Kwitter_page.html';
}
