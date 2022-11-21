const firebaseConfig = {
  apiKey: "AIzaSyDlx7bTDkgD37dRPlckEuKhCdd_G_lrrU8",
  authDomain: "simple-blocknotes.firebaseapp.com",
  projectId: "simple-blocknotes",
  storageBucket: "simple-blocknotes.appspot.com",
  messagingSenderId: "1035305781800",
  appId: "1:1035305781800:web:280da0ef47ca7c4c0a031d",
  measurementId: "G-R8DSJQXEGC",
}; // ^ Dados da aplicação no firebase

firebase.initializeApp(firebaseConfig); // ^ Inciando o firebaseAPP
const database = firebase.database(); // ^ Iniciando Realtime Database e fazebdi referência para o serviço

// TESTES
var user = "Rafael";
var blocoID = 0;

database.ref("Users/Rafael/blocos").once("value", (snapshot) => {
  let data = snapshot.val();
  for (let i in data) {
    console.log(data[i]);
  }
});

// dbRef
//   .child("Users")
//   .get()
//   .then((content) => {
//     // & Get nos dados do fireDatabase
//     if (content.exists()) {
//       content.val();
//       console.log(content.val())
//     } else {
//       console.log("404");
//     }
//   });

database
  .ref("Users/" + user + "/blocos/" + "b" + blocoID)
  .set("Olá eu sou Rafa");
blocoID++;
database
  .ref("Users/" + user + "/blocos/" + "b" + blocoID)
  .set("Olá eu sou Rafa");
blocoID++;
database
  .ref("Users/" + user + "/blocos/" + "b" + blocoID)
  .set("Olá eu sou Rafa");
blocoID++;

function fun(data) {}
