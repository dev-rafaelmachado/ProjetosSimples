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
const database = firebase.database();
const main = document.querySelector("main");
const sair = document.querySelector("#sair");

// & Função para COuntar a quantidade de elementos de um objeto do FB
function countElements_FB(p_element) {
  let x = 0;
  for (let i in p_element) {
    x++;
  }
  return x;
}

// & Função para Arrumar o nome do estabelecimento
function regularNameEstab(p_name) {
  const nameSplit = p_name.split("-");

  const newName = nameSplit
    .map((palavra) => {
      return palavra[0].toUpperCase() + palavra.substring(1);
    })
    .join(" ");

  return newName;
}

firebase.auth().onAuthStateChanged((user) => {
  // ? Caso o usuairo não esteja logado volte para a pagina de login
  if (!user) {
    window.location.href = "login.html";
  }
  // ? Caso esteja logado...
  const userEmailToken = user.email.substr(0, user.email.indexOf("@")); // ^ Salve o prefixom do seu email
  // & Busca nos dados do banco em quais estabelcimentos ele está registrado
  database.ref("User/" + userEmailToken).once("value", (snapshot) => {
    let espcosValidos = [];
    let dados = snapshot.val();
    for (let i in dados) {
      espcosValidos.push(dados[i]);
    }
    carregarSection(espcosValidos);
    carregarDados(espcosValidos); // ^ Devolve um array com o nome dos estabelecimentos registrados
  });
});

// & Carreaga todos os dados
const carregarDados = (espacos) => {
  // ~ Passa por todos os espaços registrados...
  for (let i = 0; i < espacos.length; i++) {
    // & Traz a quantidade de geladeiras
    database.ref("Estabelecimentos/" + espacos[i]).once("value", (snapshot) => {
      // ~ Passa por todas as geladerias...
      carreagarCards(espacos[i], countElements_FB(snapshot.val()));
      for (let j = 1; j <= countElements_FB(snapshot.val()); j++) {
        // * Cria um gatilho em cada uma das geladeiras para quando o valor ser alterado
        database
          .ref("Estabelecimentos/" + espacos[i] + "/gl" + j + "/Temperatura/")
          .on("value", (snapshot) => {
            atualizarDados(espacos[i], j, snapshot.val());
          });
      }
    });
  }
};

const carregarSection = (p_espacos) => {
  for (let i in p_espacos) {
    let section = document.createElement("section");
    section.classList = p_espacos[i];
    let tittle = document.createElement("h3");
    tittle.textContent = regularNameEstab(p_espacos[i]);
    section.appendChild(tittle);
    main.append(section);
  }
};

const carreagarCards = (p_section, p_quant) => {
  let section = document.querySelector("." + p_section);
  let cardsDiv = document.createElement("div");
  cardsDiv.className = "cards";
  for (let i = 1; i <= p_quant; i++) {
    let card = document.createElement("div");
    card.className = "card " + "c" + i;
    let tittle = document.createElement("h2");
    tittle.textContent = "Geladeira " + i;
    let text = document.createElement("p");
    text.className = "gl" + i;
    card.appendChild(tittle);
    card.appendChild(text);
    cardsDiv.appendChild(card);
  }
  section.appendChild(cardsDiv);
};

const atualizarDados = (p_section, p_gl, p_valor) => {
  document
    .querySelector("." + p_section)
    .querySelector(".gl" + p_gl).textContent = p_valor +"ºC";
};


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