const e_main = document.querySelector("#main");
var acertos = 0;

function renderizarElementos(dificult) {
  e_main.innerHTML = "";
  colors = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 226),
  ];
  elementDif = Math.floor(Math.random() * 9);

  for (let index = 0; index < 9; index++) {
    let element = document.createElement("button");
    element.className = "color-card";
    element.style.background =
      "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
    if (index == elementDif) {
      element.style.background =
        "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + dificult + ")";
    }
    element.onclick = () => {
      if (index == elementDif) {
        acertos++;
        renderizarElementos(dificult - 1);
      } else {
        alert(
          "ERRROUUUUUU!!!! \nMais sorte na próxima :) \nQuantidade de acertos: " +
            acertos
        );
        acertos = 0;
        renderizarElementos();
      }
    };
    e_main.appendChild(element);
  }
}

renderizarElementos(45);
