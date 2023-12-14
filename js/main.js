function addItem() {
  let inputVal = document.getElementById("todoTxt").value;
  let t = document.createTextNode(inputVal);
  let li = document.createElement("li");
  li.classList.add("todoItem");
  li.appendChild(t);

  if (inputVal == "") {
    alert("Please enter an item!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("todoTxt").value = "";
}

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});
