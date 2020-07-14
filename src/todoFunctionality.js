import {projects} from './projectFunctionality';

let todos = [];

const todo = (title,description,dueDate,priority,project) => {
    return {title,description,dueDate,priority,project};
}

const makeTodo = (title,description,dueDate,priority,project) => {
    let newTodo = todo(title,description,dueDate,priority,project);
    return newTodo;
}

const addTodoToProject = (newTodo) => {
    projects.forEach(project => {
        console.log('In');
        if(project.name == newTodo.project) {
            project.todos.unshift(newTodo);
            console.log(project.todos , 'clicked');
        }
    });
}

export {makeTodo,todos,addTodoToProject};