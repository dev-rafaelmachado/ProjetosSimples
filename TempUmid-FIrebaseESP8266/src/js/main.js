const firebaseConfig = {
  apiKey: "AIzaSyB1kNojF3mhlPg2O_qTxiro_uJ_YauGtYA",
  authDomain: "esp8266-vv1.firebaseapp.com",
  databaseURL: "https://esp8266-vv1-default-rtdb.firebaseio.com",
  projectId: "esp8266-vv1",
  storageBucket: "esp8266-vv1.appspot.com",
  messagingSenderId: "624833786701",
  appId: "1:624833786701:web:24f98840d8ce72326a3d04",
}; // ^ Config Dados da aplicação no firebase
firebase.initializeApp(firebaseConfig); // ! Inciando o firebaseAPP

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

const temp = document.querySelector("#temp");
const umid = document.querySelector("#umid");
const sair = document.querySelector("#sair");

const database = firebase.database();

database.ref("Temperatura/Valor").once("value", (snapshot) => {
  let data = snapshot.val();
  temp.textContent = data + " ºC";
});
database.ref("Umidade/Valor").once("value", (snapshot) => {
  let data = snapshot.val();
  umid.textContent = data + "%";
});

sair.addEventListener("click", (event) => {
  event.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
