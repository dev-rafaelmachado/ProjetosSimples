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

const temp = document.querySelector("#temp");
const umid = document.querySelector("#umid");

const database = firebase.database();

database.ref("Temperatura/Valor").on("value", (snapshot) => {
  let data = snapshot.val();
  temp.textContent = data + " ºC"
});
database.ref("Umidade/Valor").on("value", (snapshot) => {
  let data = snapshot.val();
  umid.textContent = data + "%"
});

