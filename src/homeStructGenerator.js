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
        projFormConatiner.classList.add('form-popup');
        const projForm = document.createElement('form');
        projForm.name = 'projForm';
        projForm.classList.add('projAddForm');
        projForm.classList.add('formPage');
        projForm.action = '/action_page.php';
        projForm.innerHTML = `<h1>Add Project</h1>
  
                                <label for="projectName"><b>Project Name:</b></label>
                                <input type="text" name="projectName" required>

                                <button type="button" class="btnLogin" id = "btnSubmit">Submit</button>
                                <div class="closeBtn" id = 'closeProjForm'>&times;</div>`;
        projFormConatiner.appendChild(projForm);
        body.appendChild(projFormConatiner);
    }

    const addToDoListFormAndButton = () => {
        const addToDo = document.createElement('div');
        addToDo.id = 'addToDo';
        addToDo.innerHTML = '&#43;';
        body.appendChild(addToDo);
    }

    const addTodoFormGenerate = () => {
        const todoFormConatiner = document.createElement('div');
        todoFormConatiner.id = 'todoFormConatiner';
        todoFormConatiner.classList.add('form-popup');
        const todoForm = document.createElement('form');
        todoForm.name = 'todoForm';
        todoForm.classList.add('todoAddForm');
        todoForm.classList.add('formPage');
        todoForm.action = '/action_page.php';
        todoForm.innerHTML = `<h1>Add Todo</h1>
  
                                <label for="title"><b>Title:</b></label>
                                <input type="text" name="title" required>

                                <label for="description"><b>Description:</b></label>
                                <textarea id="description" name="description" rows="4" cols="50"></textarea>

                                <label for="dueDate"><b>Due Date:</b></label>
                                <input type="date" name="dueDate" required>

                                <label for="priority">Priority:</label>
                                <select name="priority" id="priority">
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                                
                                <button type="button" class="btnLogin" id = "btnSubmitTodo">Submit</button>
                                <div class="closeBtn" id = 'closeTodoForm'>&times;</div>`;
        todoFormConatiner.appendChild(todoForm);
        body.appendChild(todoFormConatiner);
    }

    headerGenerate();
    sideBarGenerate();
    addProjectFormGenerate();
    addToDoListFormAndButton();
    addTodoFormGenerate();
}

export default homeStructGenerate;