import {format} from 'date-fns';
import {makeTodo, todos , addTodoToProject} from './todoFunctionality';

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
        let newTodo = makeTodo(title,description,dueDate,priority,window.this);
        console.log(newTodo);
        todos.push(newTodo);
        addTodoToProject(newTodo);
        document.querySelector('#'+ window.this).click();
        //addTodoToPage(newTodo,mainDiv);
        document.forms['todoForm'].reset();
        document.querySelector('#closeTodoForm').click();
        return;
    });
}

const addTodoToPage = (todo,mainDiv) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');
    todoContainer.innerHTML = `<div>${todo.title}</div>
                                <div>${todo.description}</div>
                                <div>${todo.dueDate}</div>
                                <div>${todo.priority}</div>`;
    mainDiv.appendChild(todoContainer);
}

const loadTodo = (e) => {
    console.log('Loading');
    if(e.target.textContent === 'Home') {
        console.log('In Home');
        const todoContainer = document.querySelector('#todoContainer');
        todoContainer.innerHTML = '';
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
}

export {todoRender,loadTodo};