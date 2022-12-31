const e_main = document.querySelector("#main");
const e_score = document.querySelector("#score");
const e_record = document.querySelector("#record");
const e_difficulty = document.querySelector(".difficulty");
var acertos = 0;
var record = 0;
var nowDifficulty = "easy";
let difficults = {
  easy: 50,
  medium: 30,
  hard: 10,
  rise: 50,
};

function renderizarElementos(p_dificult) {
  e_main.innerHTML = "";
  colors = {
    red: Math.floor(Math.random() * (256 - p_dificult)),
    green: Math.floor(Math.random() * (256 - p_dificult)),
    blue: Math.floor(Math.random() * (226 - p_dificult)),
  };
  const elementDif = Math.floor(Math.random() * 9);
  let choice = Math.floor(Math.random() * 2);
  let predominantColor = "red";
  for (const key in colors) {
    if (colors[key] > colors[predominantColor]) {
      predominantColor = key;
    }
  }
  for (let index = 0; index < 9; index++) {
    let element = document.createElement("button");
    element.className = "color-card";
    element.style.background =
      "rgb(" + colors.red + "," + colors.green + "," + colors.blue + ")";
    if (index == elementDif) {
      let colorsDif = JSON.parse(JSON.stringify(colors));
      colorsDif[predominantColor] =
        choice == 1
          ? colorsDif[predominantColor] + p_dificult
          : colorsDif[predominantColor] - p_dificult;
      element.style.background =
        "rgb(" +
        colorsDif.red +
        "," +
        colorsDif.green +
        "," +
        colorsDif.blue +
        ")";
    }
    element.onclick = () => {
      if (index == elementDif) {
        acertos++;
        e_score.innerHTML = "Score: " + acertos;
        if (nowDifficulty != "rise") {
          newDificult = difficults[nowDifficulty];
        } else {
          newDificult = p_dificult > 10 ? p_dificult - 1 : p_dificult;
        }
        renderizarElementos(newDificult);
      } else {
        if (acertos > record) {
          record = acertos;
          e_record.innerHTML = "Recorde: " + record;
        }
        renderGameOver(elementDif);
      }
    };
    e_main.appendChild(element);
  }
}

renderizarElementos(difficults[nowDifficulty]);

// --------------------------------------- //

function renderGameOver(p_elementDif) {
  e_main.childNodes[p_elementDif].style.border = "var(--pixel) solid black";

  let element = document.createElement("div");
  element.className = "blockScreen";

  let elementCard = document.createElement("div");
  elementCard.className = "card-gameOver";

  const textElement =
    "<h2>Game Over</h2> <p>Mais sorte na próxima!</p> <p> Pontuação: " +
    acertos +
    "</p>";
  elementCard.innerHTML += textElement;

  let reloadElement = document.createElement("div");
  reloadElement.onclick = () => {
    element.remove();
    acertos = 0;
    e_score.innerHTML = "Score: " + acertos;
    renderizarElementos(difficults[nowDifficulty]);
  };
  const svgElement =
    "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 593 593' fill='none'> <g clip-path='url(#clip0_1_2)'> <path d='M274.292 21.879C122.868 21.879 0 145.072 0 296.496C0 447.92 122.262 571.111 275.262 571.111V479.312C174.282 479.312 91.8 397.3 91.8 296.496C91.8 195.69 173.162 113.679 273.968 113.679C372.721 113.679 453.381 192.397 456.629 290.375H411.393L502.192 417.916L592.991 290.375H548.505C545.248 141.767 423.67 21.879 274.292 21.879Z' fill='#3C3C3C' /></g><defs><clipPath id='clip0_1_2'><rect width='592.99' height='592.99' fill='white' /></clipPath></defs></svg>";
  reloadElement.innerHTML = svgElement;
  elementCard.appendChild(reloadElement);

  element.appendChild(elementCard);
  document.body.appendChild(element);
}

// --------------------------------------- //
var lastChoice = e_difficulty.children[0];

const changeDificult = (p_dificultChoice) => {
  nowDifficulty = p_dificultChoice.getAttribute("itemprop");
  lastChoice.style.background = "white";
  lastChoice.style.color = "black";
  p_dificultChoice.style.background = "black";
  p_dificultChoice.style.color = "white";
  lastChoice = p_dificultChoice;
};

for (const key of e_difficulty.childNodes) {
  key.addEventListener("click", (event) => {
    changeDificult(key);
    acertos = 0;
    e_score.innerHTML = "Score: " + acertos;
    record = 0;
    e_record.innerHTML = "Recorde: " + record;
    renderizarElementos(difficults[nowDifficulty]);
  });
}
changeDificult(lastChoice);
