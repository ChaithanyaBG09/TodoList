const profileIcon = document.querySelector('.profile-icon');
let logoutBtn = null;

// Toggle logout button on profile icon click
profileIcon.addEventListener('click', () => {
  if (!logoutBtn) {
    logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Logout';
    logoutBtn.className = 'logout-button';

    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to logout?')) {
        alert('You have been logged out.');
        window.location.href = 'login.html'; // or your desired page
      }
    });

    document.body.appendChild(logoutBtn);
  } else {
    logoutBtn.remove();
    logoutBtn = null;
  }
});

const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.className = 'task';

  const span = document.createElement('span');
  span.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';

  span.addEventListener('click', () => {
    document.querySelectorAll('.task').forEach(task => {
      task.classList.remove('selected');
    });
    li.classList.add('selected');
  });

  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit your task:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
      span.textContent = newText.trim();
    }
  });

  deleteBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this task?')) {
      li.remove();
    }
  });
});
