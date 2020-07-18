import { addProjectToSideBar } from "./projectDOM";

let projects = [];
let todos = [];
let completedTodos = [];

const pushDataToStorage = () => {
    console.log(projects);
    console.log(todos);
    let todoSON = JSON.stringify(todos);
    let projectsSON = JSON.stringify(projects);
    let completedTodoSON = JSON.stringify(completedTodos);

    localStorage.setItem('todos',todoSON);
    localStorage.setItem('projects', projectsSON);
    localStorage.setItem('completeTodos', completedTodoSON);
    console.log('projects = '+ projects);
}

const getFromStorage = () => {
    if (localStorage.todos !== undefined || localStorage.todos !== []) {

        let todosStorage = localStorage.getItem('todos');
        todos = JSON.parse(todosStorage);
        console.log(todos);

    }
    if (localStorage.completedTodos !== undefined) {
        let completedTodosStorage = localStorage.getItem('completedTodos');
        completedTodos = JSON.parse(completedTodosStorage);
        console.log(completedTodos);

    }
    if (localStorage.projects !== undefined || localStorage.projects !== []) {
        let projectsStorage = localStorage.getItem('projects');
        projects = JSON.parse(projectsStorage);
        console.log(projects);

    }

}

const loadFromStorage = () => {
    //getFromStorage();
    if(projects !== []) {
        console.log('Loading',projects,todos);
        document.querySelector('#projContainer').innerHTML = '';
        projects.forEach(project => {
            addProjectToSideBar(project);
        });
    }
}
  

export {pushDataToStorage,projects,todos,loadFromStorage,getFromStorage,completedTodos};