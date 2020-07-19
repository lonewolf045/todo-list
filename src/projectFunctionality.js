import {addProjectToSideBar} from './projectDOM'
import {projects,pushDataToStorage} from './localStorageFunctions';

const project = (name , todos = []) => {
    return {name , todos};
};

const makeProject = (name,todos = []) => {
    let newProject = project(name,todos);
    projects.push(newProject);
    pushDataToStorage();
    addProjectToSideBar(newProject);
    // console.log(projects);
    return newProject;
};

const addTodoToProject = (newTodo) => {
    projects.forEach(project => {
        // console.log('In');
        if(project.name == newTodo.project) {
            project.todos.push(newTodo);
            // console.log(project.todos , 'clicked');
        }
    });
}

const removeFromProject = (selecTodo) => {
    // console.log(selecTodo);
    let index = 0;
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].name == selecTodo.project) 
            index = i;
    }
    let ind;
    for(let i = 0; i < projects[index].todos.length; i++) {
        // console.log(projects[index].todos[i]);
        if(JSON.stringify(projects[index].todos[i]) === JSON.stringify(selecTodo)) { 
            ind = i;
            break;
        }
    }
    //let array = projects[index].todos;
    //console.log(Array.isArray(array));
    //ind = projects[index].todos.findIndex(u => {
    //    JSON.stringify(projects[index].todos[i]) === JSON.stringify(selecTodo);
    //});
    // console.log(`index = ${ind}`);
    //removeFromProject(selecTodo);
    // console.log(projects[index]);
    // console.log(`project index = ${index}`);
    projects[index].todos.splice(ind,1);
}

const removeProject = (selecProject) => {
    let filteredprojects = projects.filter(projectChosen => projectChosen.name !== selecProject);
    projects.splice(0,projects.length,...filteredprojects);
    //return projects.filter(projectChosen => projectChosen.name !== selecProject);
}

export {makeProject,addTodoToProject,removeFromProject,removeProject};