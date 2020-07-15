import {makeProject , projects} from './projectFunctionality';
import {loadTodo} from './todoDOM';

const addProjectToSideBar = (project) => {
    console.log('Started');
    const sideMenu = document.querySelector('#sideMenu');
    const newProject = document.createElement('div');
    newProject.id = project.name;
    newProject.classList.add('sideOptions');
    newProject.classList.add('projectName');
    newProject.textContent = project.name;
    newProject.addEventListener('click',(e) => {
        window.this = e.target.textContent;
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
        addProjectToSideBar(newProject);
        //projects.push(newProject);
        //console.log(projects);
        document.forms['projForm'].reset();
        document.querySelector('#closeProjForm').click();
        document.querySelector('#'+newProject.name).click();
        return;
    });
}

export {projectRender,addProjectToSideBar};