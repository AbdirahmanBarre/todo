function addTodo(){
    const inputElement = document.querySelector('input');
    const value = inputElement.value;

    const todoContainer = document.createElement('div');
    todoContainer.className = 'flex justify-between items-center';

    const todoTitle = document.createElement('h4');
    todoTitle.textContent = value;

    const doneButton = document.createElement('button');
    doneButton.className = 'bg-green-500 px-2 py-3 rounded-lg';
    doneButton.textContent = 'Done';

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(doneButton);

    const allTodosContainer = document.querySelector('#todosContainer');
    allTodosContainer.appendChild(todoContainer);
    inputElement.value = '';

}