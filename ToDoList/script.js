document.getElementById("add").addEventListener("click", adicionarTask);

function adicionarTask() {
  let task = document.getElementById("newTask").value;
  let taskList = document.getElementById("taskList");
  let addTask = `
    <li>
        <label>
        <input type="checkbox" /> <span class="task">${task}</span>
        </label>
    </li>`;
  taskList.innerHTML += addTask;
  newTask.value = "Digite aqui sua tarefa";
}

document.getElementById("clear").addEventListener("click", clearTaskList);

function clearTaskList(){
    let list = document.getElementById("taskList");
    list.innerHTML = " ";
}
