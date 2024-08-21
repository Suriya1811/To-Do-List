
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dueDateInput = document.getElementById("dueDateInput");
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false, dueDate: dueDate });
    renderTasks();
    taskInput.value = "";
    dueDateInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() {
  const taskListDiv = document.getElementById("taskList");
  taskListDiv.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }
    const dueDateText = task.dueDate ? `Due Date: ${task.dueDate}` : "No Due Date";
    taskDiv.innerHTML = `
      <span>${task.text}</span>
      <span>${dueDateText}</span>
      <button onclick="toggleComplete(${index})">${task.completed ? "Undo" : "Complete"}</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskListDiv.appendChild(taskDiv);
  });
}