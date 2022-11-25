const toggle = document.querySelector("#toggle");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    White();
  } else {
    Black();
  }
});

function White() {
  document.body.style.setProperty("--color1", "linear-gradient(180deg, rgba(149,196,211,1) 0%, rgba(218,221,205,1) 75%)");
  document.body.style.setProperty("--color2", "#eeeab5a9");
  document.body.style.setProperty("--color3", "#d1caa4");
  document.body.style.setProperty("--color4", "#E8E5D2");
  document.body.style.setProperty("--text", "black");
}

function Black() {
  document.body.style.setProperty("--color1", "#191a21");
  document.body.style.setProperty("--color2", "#282a36");
  document.body.style.setProperty("--color3", "#21222c");
  document.body.style.setProperty("--color4", "#191a21");
  document.body.style.setProperty("--text", "white");
}
