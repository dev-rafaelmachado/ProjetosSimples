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

// -->>->>-<<--<<--|-->>->>-<<--<<--

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.href = "main.html";
  }
});

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const sign = document.querySelector("#sign");
const errorMsg = document.querySelector("#errorMsg");

function validarCampos(campo) {
  if (campo.value != "") {
    campo.style.border = "";
    return true;
  }
  campo.style.border = "1px red solid";
  sign.disabled = false;
}

sign.addEventListener("click", (event) => {
  errorMsg.textContent = "";
  sign.disabled = true;
  event.preventDefault();
  if (validarCampos(email) && validarCampos(senha)) {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email.value, senha.value)
          .then((respose) => {
            console.log(respose);
            sign.disabled = false;
            window.location.href = "main.html";
          })
          .catch((error) => {
            errorMsg.textContent = "Email e/ou senha inválidos";
            sign.disabled = false;
          });
      })
      .catch((error) => {
        console.log(error)
      });
  }
});
