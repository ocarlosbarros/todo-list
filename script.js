const inputTxtTarefa = document.getElementById('texto-tarefa');
const btnAdicionaTarefa = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
btnAdicionaTarefa.addEventListener('click', addTask);


function addTask(){
  let task = inputTxtTarefa.value;
  const taskItem = document.createElement('li');
  taskItem.classList.add('list-item');
  taskItem.innerText = task;
  taskList.appendChild(taskItem);
  inputTxtTarefa.value = '';
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

const btnClearAll = document.getElementById('apaga-tudo');
btnClearAll.addEventListener('click', clearAll);

function clearAll(){
  const listItem = document.querySelectorAll('.list-item');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove('list-item');
  }  
}

const btnRemoveCompleted = document.getElementById('remover-finalizados');
btnRemoveCompleted.addEventListener('click', removeCompleted);

function removeCompleted(){
  const itemsCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < itemsCompleted.length; index += 1) {
    itemsCompleted[index].remove('completed');
  }  
}


selectItemList();
completedItemList();


