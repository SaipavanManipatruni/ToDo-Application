const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const removeAllBtn = document.getElementById("remove-all-btn");

// Function to format the current date and time
function getCurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString(); // date in format MM/DD/YYYY
  const time = now.toLocaleTimeString(); // time in format HH:MM:SS AM/PM
  return `${date} ${time}`;
}

// Function to add a new task
function addTodo() {
  const task = todoInput.value.trim(); // Get input value and remove extra spaces
  if (task === "") return; // If input is empty, don't add to the list

  const dateTime = getCurrentDateTime(); // Get current date and time

  // Create list item for new task
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        ${task}
        <br>
        <span class="date-time">${dateTime}</span> <!-- Display the date and time -->
        <button class="delete-btn">X</button>
    `;

  // Add event listener for marking the task as completed
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  // Add event listener to remove individual tasks
  listItem.querySelector(".delete-btn").addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent triggering the complete task event
    todoList.removeChild(listItem);
  });

  // Append the new task to the list
  todoList.appendChild(listItem);

  // Clear the input field
  todoInput.value = "";
}

// Add event listener to the Add button
addBtn.addEventListener("click", addTodo);

// Allow pressing "Enter" to add a task
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Function to remove all tasks
function removeAllTodos() {
  todoList.innerHTML = ""; // Clears the entire task list
}

// Add event listener to the Remove All button
removeAllBtn.addEventListener("click", removeAllTodos);
