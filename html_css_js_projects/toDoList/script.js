// Get reference to the element
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Task Cannot be empty!");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");

  // Add task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  listItem.appendChild(taskSpan);

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };
  listItem.appendChild(deleteButton);

  // Add list item to the task list
  taskList.appendChild(listItem);

  // Clear the input
  taskInput.value = "";
}

// Attach event listener to "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Add task when pressing Enter in the input field
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
