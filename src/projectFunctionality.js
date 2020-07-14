let projects = [];

const project = (name , todos = []) => {
    return {name , todos};
};

const makeProject = (name,todos = []) => {
    let newProject = project(name,todos);
    return newProject;
};

export {makeProject,projects};