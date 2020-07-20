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
        //console.log(dueDate);
        priority = priority.value;
        makeTodo(title,description,dueDate,priority,window.projectName);
        //console.log(newTodo);
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
    const todoMainContainer = document.createElement('div');
    const todoSecondaryContainer = document.createElement('div');
    //console.log('KA');
    todoContainer.classList.add('todoContainer');
    todoMainContainer.classList.add('todoMainContainer');
    todoMainContainer.classList.add(todo.priority);
    todoContainer.todoStorage = todo;
    todoMainContainer.innerHTML = `<h3 class = 'titleTodo'>${todo.title}</h3>
                                <!--<div>${todo.description}</div>-->
                                <div class = 'dueDateTodo'>${todo.dueDate}</div>
                                <!-- <div class = '${todo.priority} priorityTodo'>${todo.priority}</div>-->`;
    if(todo.project !== window.projectName) {
        todoMainContainer.innerHTML += `<div class = 'projectTodo'>${todo.project}</div>`;
        todoMainContainer.classList.add('todoMainContainerModified');
    }
    todoMainContainer.innerHTML += `<button class = 'descriptionTodo glyphicon glyphicon-info-sign' title = 'Description'><!--<span class="glyphicon glyphicon-info-sign" aria-hidden="true">--></button>
                                    <button class = 'deleteTodo glyphicon glyphicon-remove' title = 'Delete' ><!--<span class="glyphicon glyphicon-remove" aria-hidden="true">--></button>
                                    <button class = 'doneTodo glyphicon glyphicon-ok' title = 'Completed' ><!--<span class="glyphicon glyphicon-ok" aria-hidden="true">--></button>`;
    todoSecondaryContainer.innerHTML = `${todo.description}`;
    todoSecondaryContainer.classList.add('todoSecondaryContainer');
    // todoSecondaryContainer.classList.add('descriptionTodo');
    todoContainer.appendChild(todoMainContainer);
    todoContainer.appendChild(todoSecondaryContainer);
    mainDiv.appendChild(todoContainer);
    //console.log('KA');
    //addTodoButtonFunctionality(todoContainer);
}

const addTodoButtonFunctionality = () => {
    const todoContainer = document.querySelector('#todoContainer'); 
    const deleteTodos = todoContainer.querySelectorAll('.deleteTodo');
    //console.log('Testing',deleteTodos);
    deleteTodos.forEach(deleteTodo => deleteTodo.addEventListener('click', () => {
        //console.log(deleteTodo.parentNode.parentNode.todoStorage);
        removeTodo(deleteTodo.parentNode.parentNode.todoStorage);
        deleteTodo.parentNode.parentNode.remove();
    }));  
    const doneTodos = todoContainer.querySelectorAll('.doneTodo');
    //console.log('Testing',doneTodos);
    doneTodos.forEach(doneTodo => doneTodo.addEventListener('click', () => {
        //console.log(doneTodo.parentNode.parentNode.todoStorage);
        let k = removeTodo(doneTodo.parentNode.parentNode.todoStorage);
        doneTodo.parentNode.parentNode.remove();
        completedTodos.push(k);
        //console.log(completedTodos);
    }));   
    const descriptionTodos = todoContainer.querySelectorAll('.descriptionTodo');
    //console.log('Testing',descriptionTodos);
    descriptionTodos.forEach(descriptionTodo => descriptionTodo.addEventListener('click', (e) => {
        //console.log(e.target.parentNode.nextElementSibling);
        let target = e.target.parentNode;
        if(target.classList.contains('change') === false)
            target.classList.add('change');
        else
            target.classList.remove('change');
        if(target.nextElementSibling.classList.contains('show') === false)
            target.nextElementSibling.classList.add('show');
        else
            target.nextElementSibling.classList.remove('show');
        //console.log(e);
    })); 
}

const loadTodo = (e) => {
    //console.log('Loading');
    if(e.target.textContent === 'Home') {
        //console.log('In Home');
        const todoContainer = document.querySelector('#todoContainer');
        todoContainer.innerHTML = '';
        //console.log('GoiNG IN');
        todos.forEach(todo => {
            addTodoToPage(todo,todoContainer);
        });
    } else {
        //console.log('In Others');
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