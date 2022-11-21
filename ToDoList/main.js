const addTK_ELE = document.querySelector("#addTK"),
  bt_addTK_ELE = document.querySelector("#bt-addTK"),
  tasksDIV_ELE = document.querySelector("#tasksDIV");

addTK_ELE.addEventListener("change", (event) => {
  event.preventDefault();
  if (addTK_ELE.value != "") {
    addTask(addTK_ELE.value);
    addTK_ELE.value = "";
  }
});
bt_addTK_ELE.addEventListener("change", (event) => {
  event.preventDefault();
  if (addTK_ELE.value != "") {
    addTask(addTK_ELE.value);
    addTK_ELE.value = "";
  }
});

function addTask(name) {
  let task = document.createElement("div");
  task.className = "task";

  let textDiv = document.createElement("div");
  textDiv.className = "text";

  let textName_tk = document.createElement("h3");
  textName_tk.textContent = name;

  textDiv.appendChild(textName_tk);
  task.appendChild(textDiv);

  let buttonCheck = document.createElement("button");
  let buttonDel = document.createElement("button");
  let buttonUncheck = document.createElement("button");

  svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'> <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' /></svg>";
  buttonCheck.innerHTML = svg;
  buttonCheck.className = "check";
  svg =
    "<svg clip-rule='evenodd' fill-rule='evenodd' width='35' height='35' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'     > <path   d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />     </svg>";
  buttonDel.innerHTML = svg;
  buttonDel.className = "del";
  svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 10h24v4h-24z'/></svg>";
  buttonUncheck.innerHTML = svg;
  buttonUncheck.className = "uncheck";

  buttonCheck.onclick = () => {
    textName_tk.style.textDecoration = "line-through";
    textName_tk.style.color = "#b1b1b1";
    buttonCheck.remove();
    task.insertBefore(buttonUncheck, buttonDel);
  };
  buttonDel.onclick = () => {
    task.remove();
  };
  buttonUncheck.onclick = () => {
    textName_tk.style.textDecoration = "none";
    textName_tk.style.color = "White";
    buttonUncheck.remove();
    task.insertBefore(buttonCheck, buttonDel);
  };

  task.appendChild(buttonCheck);
  task.appendChild(buttonDel);

  tasksDIV_ELE.appendChild(task);
}
