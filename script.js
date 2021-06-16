const form = document.querySelector('form');
const ul = document.querySelector('ul');
const tasksNumber = document.querySelector('h2 span');
const tasksList = document.getElementsByClassName('task');
const input = document.querySelector('input');


/* Adding a new task to the list */
const addTask = function(event) {
 event.preventDefault()
  
 const titleTask = input.value;
 if (titleTask === "") return;
 const task = document.createElement('li');
 task.className = 'task';
 task.innerHTML = titleTask;
 ul.appendChild(task);
 input.value = "";
 tasksNumber.textContent = tasksList.length;
 }

form.addEventListener('submit', addTask)