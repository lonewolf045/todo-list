import {format} from 'date-fns';
import {makeTodo, removeTodo} from './todoFunctionality';
import {todos,completedTodos} from './localStorageFunctions';

const todoRender = () => { 
    const submitButtonForm = document.querySelector('#btnSubmitTodo');
    submitButtonForm.addEventListener('click', () => {
        let title = document.forms['todoForm']['title'];
        let description = document.forms['todoForm']['description'];
        let dueDate = document.forms['todoForm']['dueDate'];
        let priority = document.forms['todoForm']['priority'];
        title = title.value;
        description = description.value;
        dueDate = dueDate.value.split('-');
        dueDate = format(new Date(dueDate[0],dueDate[1] - 1,dueDate[2]),'dd MMMM yyyy');
        console.log(dueDate);
        priority = priority.value;
        let newTodo = makeTodo(title,description,dueDate,priority,window.projectName);
        console.log(newTodo);
        //todos.push(newTodo);
        //addTodoToProject(newTodo);
        //document.querySelector('#'+ window.this).click();
        //addTodoToPage(newTodo,mainDiv);
        document.forms['todoForm'].reset();
        document.querySelector('#closeTodoForm').click();
        return;
    });
}

const addTodoToPage = (todo,mainDiv) => {
    const todoContainer = document.createElement('div');
    //console.log('KA');
    todoContainer.classList.add('todoContainer');
    todoContainer.classList.add(todo.priority);
    todoContainer.todoStorage = todo;
    todoContainer.innerHTML = `<h3 class = 'titleTodo'>${todo.title}</h3>
                                <!--<div>${todo.description}</div>-->
                                <div class = 'dueDateTodo'>${todo.dueDate}</div>
                                <!-- <div class = '${todo.priority} priorityTodo'>${todo.priority}</div>-->`;
    if(todo.project !== window.projectName) {
        todoContainer.innerHTML += `<div class = 'projectTodo'>${todo.project}</div>`;
        todoContainer.classList.add('todoContainerModified');
    }
    todoContainer.innerHTML += `<button class = 'deleteTodo'><span class="glyphicon glyphicon-remove" aria-hidden="true"></button>
                                <button class = 'doneTodo'><span class="glyphicon glyphicon-ok" aria-hidden="true"></button>`;
    mainDiv.appendChild(todoContainer);
    //console.log('KA');
    //addTodoButtonFunctionality(todoContainer);
}

const addTodoButtonFunctionality = () => {
    const deleteTodos = todoContainer.querySelectorAll('.deleteTodo');
    console.log('Testing',deleteTodos);
    deleteTodos.forEach(deleteTodo => deleteTodo.addEventListener('click', () => {
        console.log(deleteTodo.parentNode.todoStorage);
        removeTodo(deleteTodo.parentNode.todoStorage);
        deleteTodo.parentNode.remove();
    }));  
    const doneTodos = todoContainer.querySelectorAll('.doneTodo');
    console.log('Testing',doneTodos);
    doneTodos.forEach(doneTodo => doneTodo.addEventListener('click', () => {
        console.log(doneTodo.parentNode.todoStorage);
        let k = removeTodo(doneTodo.parentNode.todoStorage);
        doneTodo.parentNode.remove();
        completedTodos.push(k);
        console.log(completedTodos);
    }));    
}

const loadTodo = (e) => {
    console.log('Loading');
    if(e.target.textContent === 'Home') {
        console.log('In Home');
        const todoContainer = document.querySelector('#todoContainer');
        todoContainer.innerHTML = '';
        console.log('GoiNG IN');
        todos.forEach(todo => {
            addTodoToPage(todo,todoContainer);
        });
    } else {
        console.log('In Others');
        const todoContainer = document.querySelector('#todoContainer');
        todoContainer.innerHTML = '';
        todos.forEach(todo => {
            if(todo.project === e.target.textContent)
                addTodoToPage(todo,todoContainer);
        });
    }
    addTodoButtonFunctionality();
    //console.log('GGGGGGG');
}

export {todoRender,loadTodo};