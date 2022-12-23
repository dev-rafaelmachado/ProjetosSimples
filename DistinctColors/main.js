const e_main = document.querySelector("#main");
const e_score = document.querySelector("#score");
var acertos = 0;

function renderizarElementos(dificult) {
  e_main.innerHTML = "";
  colors = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 226),
  ];
  const elementDif = Math.floor(Math.random() * 9);

  for (let index = 0; index < 9; index++) {
    let element = document.createElement("button");
    element.className = "color-card";
    element.style.background =
      "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
    if (index == elementDif) {
      element.style.background =
        "rgb(" +
        colors[0] +
        "," +
        colors[1] +
        "," +
        (colors[2] + dificult) +
        ")";
    }
    element.onclick = () => {
      if (index == elementDif) {
        acertos++;
        e_score.innerHTML = "Score: " + acertos
        renderizarElementos(dificult - 1);
      } else {
        renderGameOver();
      }
    };
    e_main.appendChild(element);
  }
}

renderizarElementos(60);

// --------------------------------------- //

function renderGameOver() {
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
    renderizarElementos(60);
  };
  const svgElement =
    "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 593 593' fill='none'> <g clip-path='url(#clip0_1_2)'> <path d='M274.292 21.879C122.868 21.879 0 145.072 0 296.496C0 447.92 122.262 571.111 275.262 571.111V479.312C174.282 479.312 91.8 397.3 91.8 296.496C91.8 195.69 173.162 113.679 273.968 113.679C372.721 113.679 453.381 192.397 456.629 290.375H411.393L502.192 417.916L592.991 290.375H548.505C545.248 141.767 423.67 21.879 274.292 21.879Z' fill='#3C3C3C' /></g><defs><clipPath id='clip0_1_2'><rect width='592.99' height='592.99' fill='white' /></clipPath></defs></svg>";
  reloadElement.innerHTML = svgElement;
  elementCard.appendChild(reloadElement);

  element.appendChild(elementCard);
  document.body.appendChild(element);
}
