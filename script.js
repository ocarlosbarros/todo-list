const inputTxtTarefa = document.getElementById('texto-tarefa');
const btnAdicionaTarefa = document.getElementById('criar-tarefa');

const taskList = document.getElementById('lista-tarefas');
btnAdicionaTarefa.addEventListener('click', addTask);

function addTask(){
  let task = inputTxtTarefa.value;
  const taskItem = document.createElement('li');
  taskItem.innerHTML = task;
  taskList.appendChild(taskItem);
  
}

function selectItemList(){
  taskList.addEventListener('click', function(event){
  const selectedItem = event.target;
  let selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
  }
  selectedItem.classList.add('selected');
  });
}

function completedItemList(){
  taskList.addEventListener('dblclick', function(event){
  const completedItem = event.target;
  completedItem.classList.toggle('completed');
  });
}

selectItemList();
completedItemList();


