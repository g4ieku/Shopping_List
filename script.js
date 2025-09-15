const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const itemFilter = document.querySelector("#filter");
const items = itemList.querySelectorAll("li");
const clearBtn = document.querySelector("#clear");

const addItem = (event) => {
  event.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "") {
    alert("Please add an item!");
  } else {
    createNewItem(newItem);

    checkUI();

    itemInput.value = null;
  }
};

const createNewItem = (item) => {
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
    const itemName =
      event.target.parentElement.parentElement.textContent.trim();
    if (confirmation(`Are you sure you want to delete ${itemName}?`)) {
      event.target.parentElement.parentElement.remove();
    }
  }

  checkUI();
};

const removeAllItems = () => {
  if (confirmation("Are you sure you want to delete all items?")) {
    items.forEach((item) => {
      item.remove();
    });
  }

  checkUI();
};

const checkUI = () => {
  const items = itemList.querySelectorAll("li");

  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
};

const confirmation = (text) => {
  if (confirm(text)) {
    return true;
  } else {
    return false;
  }
};

itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", removeAllItems);
checkUI();
