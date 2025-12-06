const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const dingSound = document.getElementById("dingSound");

addBtn.addEventListener("click", function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    if (li.classList.contains("done")) {
      li.classList.remove("done");
    } else {
      li.classList.add("done");
      dingSound.play();
    }
  })

  const del = document.createElement("span");
  del.textContent = "X";
  del.className = "delete";
  del.addEventListener("click", (p) => {
    p.stopPropagation();
    li.remove();
  })

  li.appendChild(del);
  taskList.appendChild(li);

  taskInput.value = "";
})