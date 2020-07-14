import homeStructGenerate from './homeStructGenerator';
import {makeProject} from './projectFunctionality';

const homeModule = () => {
    window.this = 'Home';
    makeProject('Home');
    const body = document.querySelector('#main-div');
    homeStructGenerate(body);
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
    });
    const close = document.querySelector('#close');
    close.addEventListener('click', () => {
        //console.log('Clicked');
        sideBar.style.width = '0px';
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

}

export default homeModule;