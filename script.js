const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

const addItem = (event) => {
  event.preventDefault();

  const newItem = itemInput.value;
  console.log(newItem);

  if (newItem === "") {
    alert("Please add an item!");
  } else {
    createNewItem(newItem);
    itemInput.value = null;
  }
};

const createNewItem = (item) => {
  console.log(item);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const btn = document.createElement("button");
  btn.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  btn.appendChild(icon);
  li.appendChild(btn);

  itemList.appendChild(li);
};

itemForm.addEventListener("submit", addItem);
