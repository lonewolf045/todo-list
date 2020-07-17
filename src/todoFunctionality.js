//import {projects} from './localStorageFunctions';
import {todos, pushDataToStorage} from './localStorageFunctions';
import {addTodoToProject,removeFromProject} from './projectFunctionality';

const todo = (title,description,dueDate,priority,project) => {
    return {title,description,dueDate,priority,project};
}

const makeTodo = (title,description,dueDate,priority,project) => {
    let newTodo = todo(title,description,dueDate,priority,project);
    todos.push(newTodo);
    addTodoToProject(newTodo);
    document.querySelector('#'+ window.this).click();
    pushDataToStorage();
    return newTodo;
}

const removeTodo = (selecTodo) => {
    const index = todos.indexOf(selecTodo);
    console.log(`index = ${index}`);
    removeFromProject(selecTodo);
    todos.splice(index, 1);
    pushDataToStorage();
} 


export {makeTodo,addTodoToProject,removeTodo};