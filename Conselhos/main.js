const reload_ELE = document.querySelector("#reload"),
  copy_ELE = document.querySelector("#copy"),
  text = document.querySelector("#element");

const getAPI = async () => {
  const responseAPI = await fetch("https://api.adviceslip.com/advice");
  const APIdata = await responseAPI.json();
  return await APIdata;
};

const renderAdvice = async () => {
  const data = await getAPI();

  text.textContent = data.slip.advice;
};

renderAdvice();

// ---------------------- //

reload_ELE.addEventListener("click", (event) => {
  event.preventDefault();
  renderAdvice();
});

copy_ELE.addEventListener("click", (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(text.textContent);
  copy_ELE.className = "animation "
});