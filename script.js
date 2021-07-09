const inputTxtTarefa = document.getElementById('texto-tarefa');
const btnAdicionaTarefa = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

btnAdicionaTarefa.addEventListener('click', addTask);


function addTask(){
  let task = inputTxtTarefa.value;
  const taskItem = document.createElement('li');
  taskItem.classList.add('item-list');
  taskItem.innerHTML = task;
  taskList.appendChild(taskItem);
  
}
console.log(taskList);

document.querySelectorAll('.item-list').forEach(item => {
  console.log('item-no-foreach')
  item.addEventListener('click', selectItemList);
});




function selectItemList(event){
  console.log('item-na-funcao');
  selectedItem = event.target;
  console.log(selectedItem);
  selectedItem.style.backgroundColor = 'rgb(' + 128 + ',' + 128 + ',' + 128 + ')';
}

console.log(taskList);
