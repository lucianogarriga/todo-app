const theme = document.getElementById('theme');
const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.content ul')

theme.addEventListener('click', ()=>{
    document.querySelector('body').classList = [theme.checked ? 'theme-light' : 'theme-dark'];
})

newItemInput.addEventListener('keypress', (e) =>{
    if (e.charCode === 13 && newItemInput.value.length > 0){
        createNewTodoItem(newItemInput.value)
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
}