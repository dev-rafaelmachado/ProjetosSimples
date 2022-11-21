const search = document.querySelector("#search"),
  btn = document.querySelector("#btn"),
  list = document.querySelector(".list");

search.addEventListener("change", (event) => {
  event.preventDefault();
  adcItem(search.value);
  search.value = "";
});


function adcItem(itemName) {
  let itemDiv = document.createElement("div");
  itemDiv.className = "item";

  let span = document.createElement("span");
  span.className = "pt1";

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  span.appendChild(checkbox);

  let textItem = document.createElement("h5");
  textItem.textContent = itemName;
  span.appendChild(textItem);

  checkbox.onclick = () => {
    if (checkbox.checked) {
      textItem.style.textDecoration = "line-through";
      textItem.style.color = "rgb(220, 220, 220)";
    } else {
      textItem.style.textDecoration = "none";
      textItem.style.color = "white";
    }
  };

  let trash = document.createElement("div");
  trash.innerHTML =
    "<svg width='24' height='24'> <path d='M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z' /> </svg>";

  trash.onclick = () => {
    itemDiv.remove();
  };

  itemDiv.appendChild(span);
  itemDiv.appendChild(trash);
  list.appendChild(itemDiv);
}
{
  /* <div class="item">
<span class="pt1"
  ><input type="checkbox" id="it1" />
  <h5> Fazer um belo bolo </h5>
</span>
<div>

</div>
</div> */
}
