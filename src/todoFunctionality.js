//import {projects} from './localStorageFunctions';
import { todos, pushDataToStorage } from "./localStorageFunctions";
import { addTodoToProject, removeFromProject } from "./projectFunctionality";

const todo = (title, description, dueDate, priority, project) => {
  return { title, description, dueDate, priority, project };
};

const makeTodo = (title, description, dueDate, priority, project) => {
  let newTodo = todo(title, description, dueDate, priority, project);
  todos.push(newTodo);
  addTodoToProject(newTodo);
  document.querySelector("#" + window.this).click();
  pushDataToStorage();
  return newTodo;
};

const removeTodo = (selecTodo) => {
  const index = todos.indexOf(selecTodo);
  // console.log(`index = ${index}`);
  removeFromProject(selecTodo);
  let k = todos.splice(index, 1);
  pushDataToStorage();
  return k;
};

const removeTodoBasedOnProject = (selecProject) => {
  // console.log(selecProject);
  let filteredTodos = todos.filter((todo) => todo.project !== selecProject);
  todos.splice(0, todos.length, ...filteredTodos);
  //return todos.filter(todo => todo.name !== selecProject);
};

export { makeTodo, addTodoToProject, removeTodo, removeTodoBasedOnProject };
