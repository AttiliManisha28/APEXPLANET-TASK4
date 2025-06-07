const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => createTaskElement(task.text, task.completed));
};

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    createTaskElement(taskText);
    saveToStorage();
    taskInput.value = "";
  }
});

function createTaskElement(text, completed = false) {
  const li = document.createElement("li");
  li.textContent = text;
  if (completed) li.classList.add("completed");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveToStorage();
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    saveToStorage();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

function saveToStorage() {
  const tasks = [];
  document.querySelectorAll("li").forEach((li) => {
    tasks.push({ text: li.firstChild.textContent, completed: li.classList.contains("completed") });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
