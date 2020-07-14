import {format} from 'date-fns';
import {makeTodo, todos , addTodoToProject} from './todoFunctionality';

const todoRender = () => { 
    
    const addTodoToPage = (todo,mainDiv) => {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        todoContainer.innerHTML = `<div>${todo.title}</div>
                                    <div>${todo.description}</div>
                                    <div>${todo.dueDate}</div>
                                    <div>${todo.priority}</div>`;
        mainDiv.appendChild(todoContainer);
    }
    
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
        const mainDiv = document.querySelector('#main-div');
        console.log(mainDiv);
        //addProjectToSideBar(newProject);
        //projects.push(newProject);
        //document.querySelector('#closeProjForm').click();
        //document.querySelector('#'+newProject.name).click();
        todos.push(newTodo);
        addTodoToProject(newTodo);
        addTodoToPage(newTodo,mainDiv);
        document.forms['todoForm'].reset();
        document.querySelector('#closeTodoForm').click();
        return;
    });
}

export default todoRender;