const todos = (title,description,dueDate,priority,project) => {
    return {title,description,dueDate,priority,project};
}

const makeTodo = (title,description,dueDate,priority,project) => {
    let newTodo = todos(title,description,dueDate,priority,project);
}

export {makeTodo};