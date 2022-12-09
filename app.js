let todos = [];
const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

function addToDo(text){
    const todo = { //Создаёт объект(задачу) и добавляет объект в массив таких же объектов(задач)!
        text,
        done: false,
        id: `${Math.random()}`
    };

    todos.push(todo);
    inputNode.value = '';
}

function deleteToDo(id){
    todos.forEach(todo => {
        if (todo.id == id){ //Сравнивает переданное айди с айди элементами списка задач и переводит в "сделано"
            todo.done = true;
        }
    });
}
btnNode.addEventListener('click', () =>{
    let text = inputNode.value;  //При клике добавить задачу считывает текст с инпута и передаёт в функцию!
    addToDo(text);
    render();
});

todosNode.addEventListener('click', (event) => {
    if (event.target.tagName != 'BUTTON'){ //Если клик не по кнопке, то ничего не происходит!
        return;
    }
    const id = event.target.dataset.id;
    deleteToDo(id);
    render();
});


function render(){
    let html = ``;
    todos.forEach(todo =>{
        if (todo.done){
            return;   //Если задача выполнена, то она не выводится!
        }

        html+= `
            <div>
                ${todo.text}
                <button data-id='${todo.id}' class='done-btn'>Сделано</button>
            </div>
        `;

    });
    todosNode.innerHTML = html;
}

render();