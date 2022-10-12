const theme = document.getElementById('theme');
const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.content ul');
const itemsLeft = document.querySelector('.items-left span');

theme.addEventListener('click', ()=>{
    document.querySelector('body').classList = [theme.checked ? 'theme-light' : 'theme-dark'];
})

newItemInput.addEventListener('keypress', (e) =>{
    if (e.charCode === 13 && newItemInput.value.length > 0){
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
})

 function createNewTodoItem(text){
    const element = document.createElement('li');

    element.innerHTML = `
    <label class="list-item">
        <input type="checkbox" name="todoItem1">
        <span class="checkmark"></span>
        <span class="text">${text}</span>
    </label> 
    <span class="remove"></span>
    `;

    todoList.append(element); 
    updateItemsCount(1);
}

function updateItemsCount(number){
    itemsLeft.innerText = +itemsLeft.innerText + number;
}
function removeTodoItem(element){
    element.remove();
    updateItemsCount(-1);
}
todoList.addEventListener('click', (e) =>{
    console.log(e);
    if(e.target.classList.contains('remove')){
        removeTodoItem(e.target.parentElement);
    }
})
document.querySelector('.clear').addEventListener('click', ()=>{
    document.querySelectorAll('.list-item input[type="checkbox"]').forEach(item =>{
        removeTodoItem(item.closest('li'));
    })
})