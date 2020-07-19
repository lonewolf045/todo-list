import {makeProject, removeFromProject,removeProject} from './projectFunctionality';
import {loadTodo} from './todoDOM';
import {projects,todos, pushDataToStorage} from './localStorageFunctions';
import {addProjectHeading} from './homeStructGenerator';
import { removeTodoBasedOnProject } from './todoFunctionality';

const addProjectToSideBar = (project) => {
    // console.log('Started');
    const sideMenu = document.querySelector('#projContainer');
    const newProject = document.createElement('div');
    const projectName = document.createElement('div');
    const deleteProject = document.createElement('button');
    projectName.id = project.name.split(' ').join('');
    //newProject.projectName = project.name;
    //newProject.classList.add('sideOptions');
    newProject.classList.add('project');
    projectName.classList.add('projectName');
    projectName.textContent = project.name;
    deleteProject.innerHTML = `&times;`;
    //newProject.innerHTML = `<div>${project.name}</div>
    //                        <button class = 'deleteProject'><span class="glyphicon glyphicon-remove" aria-hidden="true"></button>`;
    projectName.addEventListener('click',(e) => {
        window.this = project.name.split(' ').join('');
        window.projectName = project.name;
        addProjectHeading(window.projectName);
        loadTodo(e);
    });
    deleteProject.projectName = project.name;
    deleteProject.classList.add('deleteProject');
    deleteProject.addEventListener('click', (e) => {
        // console.log(Object(e));
        removeTodoBasedOnProject(e.target.projectName);
        removeProject(e.target.projectName);
        pushDataToStorage();
        e.target.parentNode.remove();
        if(window.projectName === e.target.projectName) {
            document.querySelector('#Home').click();
        } else {
            document.querySelector('#'+window.this).click();
        }
    });
    newProject.appendChild(projectName);
    if(project.name !== 'Home')
        newProject.appendChild(deleteProject);
    sideMenu.appendChild(newProject);
    projectName.click();
    //const deleteProject = newProject.querySelector('.deleteProject');
    
}

const projectRender = () => {    
    const submitButtonForm = document.querySelector('#btnSubmit');
    submitButtonForm.addEventListener('click', () => {
        let projectName = document.forms['projForm']['projectName'];
        // console.log(projectName);
        let newProject = makeProject(projectName.value);
        document.forms['projForm'].reset();
        document.querySelector('#closeProjForm').click();
        document.querySelector('#'+ newProject.name.split(' '),join()).click();
        // console.log(document.querySelector(projectName == newProject.name));
        return;
    });
}

export {projectRender,addProjectToSideBar};