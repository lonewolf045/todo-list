const homeStructGenerate = (body) => {
    const headerGenerate = () => {
        const headingContainer = document.createElement('header');
        const homeMenu = document.createElement('div');
        const heading = document.createElement('h1');
        headingContainer.id = 'headingContainer';
        homeMenu.id = 'homeMenu';
        heading.id = 'heading';
        homeMenu.innerHTML = '&#9776;';
        heading.textContent = 'To Do List';
        headingContainer.appendChild(homeMenu);
        headingContainer.appendChild(heading);
        body.appendChild(headingContainer);
    }
    const sideBarGenerate = () => {
        const sideMenu = document.createElement('div');
        sideMenu.id = 'sideMenu';
        sideMenu.innerHTML = `<div class = 'sideOptions'>Default</div>
                                <div  class = 'sideOptions' id = 'addProj'>Add New Project</div>
                                <div id = 'close' class = 'sideOptions closeBtn' >&times;</div>`;
        body.appendChild(sideMenu);
    }

    const addProjectFormGenerate = () => {
        const projFormConatiner = document.createElement('div');
        projFormConatiner.id = 'projFormConatiner';
        projFormConatiner.classList.add('projAdd-form-popup');
        const projForm = document.createElement('form');
        projForm.name = 'projForm';
        projForm.classList.add('projAddForm');
        projForm.action = '/action_page.php';
        projForm.innerHTML = `<h1>Login</h1>
  
                                <label for="projectName"><b>Project Name:</b></label>
                                <input type="text" name="projectName" required>

                                <button type="button" class="btnLogin" id = "btnSubmit">Submit</button>
                                <div class="closeBtn" id = 'closeProjForm'>&times;</div>`;
        projFormConatiner.appendChild(projForm);
        body.appendChild(projFormConatiner);
    }

    headerGenerate();
    sideBarGenerate();
    addProjectFormGenerate();
}

export default homeStructGenerate;