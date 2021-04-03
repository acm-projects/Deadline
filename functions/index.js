const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllProjects,
    postOneProject,
    deleteProject,
    editProject,
    //getAllTasks
} = require('./APIs/project')

app.get('/projects', getAllProjects);
//app.get('/tasks', getAllTasks);
app.post('/project', postOneProject);
app.delete('/project/:projectId', deleteProject);
app.put('/project/:projectId', editProject);
exports.api = functions.https.onRequest(app);

