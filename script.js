const inputTxtTarefa = document.getElementById('texto-tarefa');
const btnAdicionaTarefa = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

btnAdicionaTarefa.addEventListener('click', addTask);


function addTask(){
  let task = inputTxtTarefa.value;
  const taskItem = document.createElement('li');
  taskItem.innerText = task;
  taskItem.classList.add('item-list');
  taskList.appendChild(taskItem);
  task = '';
}

document.querySelectorAll('.item-list').forEach(item => {
  item.addEventListener('click', selectItemList);
});

function selectItemList(event){
  console.log('Passei');
}