function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Пожалуйста напишите задания!.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Удалить</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
