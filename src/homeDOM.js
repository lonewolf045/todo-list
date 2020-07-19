import homeStructGenerate from './homeStructGenerator';
import {makeProject} from './projectFunctionality';
import {projects} from './localStorageFunctions';

const homeModule = () => {
    const body = document.querySelector('#main-div');
    homeStructGenerate(body);
    
    if(projects.length == 0 || projects == null) {
        window.this = 'Home';
        makeProject('Home');
    }
    

    //console.log('Clicked');
    /*const sideBarOpen = () => {
        //console.log(e);
        const sideBar = document.querySelector('#sideMenu');
        console.log(sideBar.style);
        sideBar.style.width = '280px';
    }*/
    const menu = document.querySelector('#homeMenu');
    const sideBar = document.querySelector('#sideMenu');
    menu.addEventListener('click' , () => {
        //console.log(sideBar.style);
        sideBar.style.width = '280px';
        document.querySelector('#todoContainer').style.left = '280px';
    });
    const close = document.querySelector('#close');
    close.addEventListener('click', () => {
        //console.log('Clicked');
        sideBar.style.width = '0px';
        document.querySelector('#todoContainer').style.left = '0px';
    });
    const addProj = document.querySelector('#addProj');
    addProj.addEventListener('click', () => {
        document.querySelector('#projFormConatiner').style.display = 'block';
    });
    const closeProjForm = document.querySelector('#closeProjForm');
    closeProjForm.addEventListener('click' , () => {
        document.querySelector('#projFormConatiner').style.display = 'none';
    });

    const addToDo = document.querySelector('#addToDo');
    addToDo.addEventListener('click' , () => {
        document.querySelector('#todoFormConatiner').style.display = 'block';
    });

    const closeTodoForm = document.querySelector('#closeTodoForm');
    closeTodoForm.addEventListener('click' , () => {
        document.querySelector('#todoFormConatiner').style.display = 'none';
    });

    /*document.querySelector('#Home').addEventListener('click',(e) => {
        window.this = e.target.textContent;
        loadTodo(e);
    });*/

}

export default homeModule;