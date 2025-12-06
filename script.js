const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const dingSound = document.getElementById("dingSound");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
    if (li.classList.contains("done")) {
      dingSound.play();
    }
  });

  const del = document.createElement("span");
  del.textContent = "X";
  del.className = "delete";
  del.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });

  li.appendChild(del);
  taskList.appendChild(li);

  taskInput.value = "";
});
