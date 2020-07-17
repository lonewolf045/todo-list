import {makeProject} from './projectFunctionality';
import {loadTodo} from './todoDOM';
import {projects} from './localStorageFunctions';
import {addProjectHeading} from './homeStructGenerator';

const addProjectToSideBar = (project) => {
    console.log('Started');
    const sideMenu = document.querySelector('#projContainer');
    const newProject = document.createElement('div');
    newProject.id = project.name;
    //newProject.classList.add('sideOptions');
    newProject.classList.add('projectName');
    newProject.textContent = project.name;
    newProject.addEventListener('click',(e) => {
        window.this = e.target.textContent;
        addProjectHeading(window.this);
        loadTodo(e);
    });
    sideMenu.appendChild(newProject);
}

const projectRender = () => {    
    const submitButtonForm = document.querySelector('#btnSubmit');
    submitButtonForm.addEventListener('click', () => {
        let projectName = document.forms['projForm']['projectName'];
        console.log(projectName);
        let newProject = makeProject(projectName.value);
        document.forms['projForm'].reset();
        document.querySelector('#closeProjForm').click();
        document.querySelector('#'+newProject.name).click();
        return;
    });
}

export {projectRender,addProjectToSideBar};