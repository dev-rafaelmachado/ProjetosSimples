const firebaseConfig = {
  apiKey: "AIzaSyDlx7bTDkgD37dRPlckEuKhCdd_G_lrrU8",
  authDomain: "simple-blocknotes.firebaseapp.com",
  projectId: "simple-blocknotes",
  storageBucket: "simple-blocknotes.appspot.com",
  messagingSenderId: "1035305781800",
  appId: "1:1035305781800:web:280da0ef47ca7c4c0a031d",
  measurementId: "G-R8DSJQXEGC",
}; // ^ Config Dados da aplicação no firebase

firebase.initializeApp(firebaseConfig); // ^ Inciando o firebaseAPP
const database = firebase.database(); // ^ Iniciando Realtime Database e fazebdi referência para o serviço

// ###--->>-->>-->>-->>-->>---### //

database.ref("Users/Rafael/blocos").once("value", (snapshot) => {
  let data = snapshot.val();
  for (let i in data) {
    addCard(data[i].texto, data[i].key);
  }
});

const main = document.querySelector("main"),
  adc = document.querySelector(".adc"),
  last = document.querySelector("#last");

function gerarKey() {
  let A = Math.floor(Math.random() * 100000);
  let B = Math.floor(Math.random() * 100000);
  let C = Math.floor(Math.random() * 100);

  return A + B + C ** 2;
}

adc.addEventListener("click", (event) => {
  event.preventDefault();
  addCard("", gerarKey());
});

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function addCard(data, key) {
  let card = document.createElement("div");
  card.className = "card";

  let text = document.createElement("div");
  text.className = "text";

  let textArea = document.createElement("textarea");
  textArea.cols = "30";
  textArea.rows = "10";
  textArea.value = data;

  textArea.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(textArea.value);
    database.ref("Users/Rafael/blocos/" + key).update({
      texto: textArea.value
    });
  });
  text.appendChild(textArea);

  let actions = document.createElement("div");
  actions.className = "actions";

  let trash = document.createElement("div");
  trash.innerHTML =
    "<svg       class='svg'       id='trash'       width='24'       height='24'       xmlns='http://www.w3.org/2000/svg'       fill-rule='evenodd'       clip-rule='evenodd'     >       <path d='M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z' />     </svg>";
  trash.onclick = () => {
    card.remove();
    database.ref("Users/Rafael/blocos/" + key).remove();
  };

  let copy = document.createElement("div");
  copy.innerHTML =
    "<svg       class='svg'       id='copy'       xmlns='http://www.w3.org/2000/svg'       width='24'       height='24'       viewBox='0 0 24 24'     >       <path d='M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z' />     </svg>";
  copy.onclick = () => {
    console.log(textArea.value);
    navigator.clipboard.writeText(textArea.value)
  };

  actions.appendChild(trash);
  actions.appendChild(copy);

  card.appendChild(text);
  card.appendChild(actions);

  insertAfter(card, adc);

  database.ref("Users/Rafael/blocos/" + key).set({
    key: key,
    texto: data,
  });
}
