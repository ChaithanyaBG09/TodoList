const taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");
const noTaskMessage = document.getElementById("noTaskMessage");

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  noTaskMessage.style.display = "none";

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskInputField = document.createElement("input");
  taskInputField.type = "text";
  taskInputField.value = taskText;
  taskInputField.setAttribute("readonly", "true");

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    if (taskInputField.hasAttribute("readonly")) {
      taskInputField.removeAttribute("readonly");
      taskInputField.focus();
      editBtn.textContent = "Save";
    } else {
      taskInputField.setAttribute("readonly", "true");
      editBtn.textContent = "Edit";
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    taskItem.remove();
    if (taskContainer.querySelectorAll(".task-item").length === 0) {
      noTaskMessage.style.display = "block";
    }
  };

  taskActions.appendChild(editBtn);
  taskActions.appendChild(deleteBtn);

  taskItem.appendChild(taskInputField);
  taskItem.appendChild(taskActions);
  taskContainer.appendChild(taskItem);

  taskInput.value = "";
}
