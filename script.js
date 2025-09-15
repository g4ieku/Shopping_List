const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearBtn = document.querySelector("#clear");

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

const removeItem = (event) => {
  if (event.target.parentElement.classList.contains("remove-item")) {
    event.target.parentElement.parentElement.remove();
  }
};

const removeAllItems = () => {
  itemList.querySelectorAll("li").forEach((item) => {
    item.remove();
  });
};

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", removeAllItems);
