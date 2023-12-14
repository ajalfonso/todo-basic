let lst = document.getElementById("todoList");

function addItem() {
  let inputVal = document.getElementById("todoTxt").value;
  let t = document.createTextNode(inputVal);
  let li = document.createElement("li");
  li.classList.add("todoItem");
  li.appendChild(t);

  if (inputVal == "") {
    alert("Please enter an item!");
  } else if (inputVal == "kms") {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = "img/dontkys.jpg";
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("todoTxt").value = "";
}

function modalClose() {
  document.getElementById("myModal").style.display = "None";
}

document.addEventListener("keypress", (e) => {
  if (
    e.key === "Enter" &&
    document.activeElement === document.getElementById("todoTxt")
  ) {
    addItem();
  }
});
