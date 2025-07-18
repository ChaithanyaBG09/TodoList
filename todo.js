const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const noTask = document.getElementById('noTask');

let taskCounter = 0;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  taskCounter++;

  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';

  const taskRow = document.createElement('div');
  taskRow.className = 'task-row';

  const textSpan = document.createElement('div');
  textSpan.className = 'task-text';
  textSpan.innerText = `${taskCounter}. ${taskText}`;

  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'task-buttons';

  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';

  // EDIT logic
  editBtn.onclick = () => {
    const originalText = textSpan.innerText.split('. ').slice(1).join('. ');
    const input = document.createElement('input');
    input.className = 'edit-mode-input';
    input.type = 'text';
    input.value = originalText;

    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Save';

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';

    saveBtn.onclick = () => {
      const updatedText = input.value.trim();
      if (updatedText !== '') {
        const index = getTaskIndex(taskItem);
        textSpan.innerText = `${index}. ${updatedText}`;
        restoreView();
      }
    };

    cancelBtn.onclick = () => {
      restoreView();
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveBtn.click();
    });

    function restoreView() {
      taskRow.replaceChild(textSpan, input);
      buttonGroup.replaceChildren(editBtn, deleteBtn);
      buttonGroup.style.display = 'flex';
    }

    // Switch to edit mode
    taskRow.replaceChild(input, textSpan);
    buttonGroup.replaceChildren(saveBtn, cancelBtn);
    buttonGroup.style.display = 'flex';
    input.focus();
  };

  // DELETE logic
  deleteBtn.onclick = () => {
    if (confirm('Are you sure you want to delete this task?')) {
      taskItem.remove();
      updateSerialNumbers();
      if (taskList.children.length === 0) {
        noTask.style.display = 'block';
        taskCounter = 0;
      }
    }
  };

  buttonGroup.append(editBtn, deleteBtn);
  taskRow.append(textSpan, buttonGroup);
  taskItem.appendChild(taskRow);
  taskList.appendChild(taskItem);

  noTask.style.display = 'none';
  taskInput.value = '';
}

function updateSerialNumbers() {
  const items = document.querySelectorAll('.task-text');
  items.forEach((item, index) => {
    const originalText = item.innerText.split('. ').slice(1).join('. ');
    item.innerText = `${index + 1}. ${originalText}`;
  });
  taskCounter = items.length;
}

function getTaskIndex(taskItem) {
  return Array.from(taskList.children).indexOf(taskItem) + 1;
}

function toggleDropdown() {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
}

function confirmLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = 'index.html';
  }
}
