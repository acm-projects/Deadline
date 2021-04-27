const { db, admin } = require('../util/admin');
const firebase = require('firebase');
const config = require('../util/config.js');

firebase.initializeApp(config);

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

async function scheduleTasks(passedID) {
    try{
        const projectRef = db.collection('projectInfo').doc(passedID);
        const snapshot = await projectRef.get();
        var startDate  = snapshot.data().dateCreate;
        var deadline = snapshot.data().deadline;
        var tasks = snapshot.data().tasks
        var totalComplexity = 0;
        var percentage = 0;
        var taskDeadline;
    
        // calculate the number of days between the start and end date 
        var tempDeadline = new Date(deadline.toDate());
        var tempStartDate = new Date(startDate.toDate());
        var dayDifference = Math.abs(tempDeadline - tempStartDate);
        var referenceDate = new Date(Date.UTC(1970, 0, 1));

        dayDifference = dayDifference / (1000 * 3600 * 24);
       
        // get the total complexity
        for (let i = 0; i < tasks.length; i++) {
            totalComplexity += snapshot.data().tasks[i].complexity;
        }

        // give every task a deadline
        var lastDate = tempStartDate;
        var uTaskName = {};
        var uTaskStatus = {};
        var uTaskDeadline = {};
        var uTaskComplexity = {};
      
        for (let i = 0; i < tasks.length; i++) {
            currentTask = snapshot.data().tasks[i];
            percentage = currentTask.complexity / totalComplexity;
            taskInterval = Math.round(dayDifference * percentage); 
            taskDeadline = new Date(lastDate);
            
            taskDeadline = taskDeadline.addDays(taskInterval);
            taskDeadline.setHours(0,0,0,0);
            console.log(taskDeadline)
            
            // update to database
            uTaskName[`tasks.${i}.name`] = currentTask.name;
            uTaskDeadline[`tasks.${i}.deadline`] = taskDeadline;
            uTaskStatus[`tasks.${i}.status`] = currentTask.status
            uTaskComplexity[`tasks.${i}.complexity`] = currentTask.complexity
            
            const updateTask = await projectRef.update(uTaskName);
            const updateDeadline = await projectRef.update(uTaskDeadline);
            const updateStatus = await projectRef.update(uTaskStatus);
            const updateComplexity = await projectRef.update(uTaskComplexity);

            lastDate = taskDeadline;
        
        console.log(currentTask.name, '=>', taskDeadline, currentTask.complexity, percentage, taskInterval);
        console.log("\n");
        }
        
    }
    catch (err) {
        console.log('Error getting documents', err);
    }
}

exports.getAllProjects = (request, response) => {
	db
		.collection('projectInfo')
		.orderBy('dateCreate', 'desc')
		.get()
		.then((data) => {
			let projectInfo = [];
			data.forEach((doc) => {
                
			    projectInfo.push({
                    projectId: doc.id,
                    projectName: doc.data().projectName,
					projectDesc: doc.data().projectDesc,
					dateCreate: doc.data().dateCreate,
                    deadline: doc.data().deadline,
                    tasks: doc.data().tasks
				});
			});
			return response.json(projectInfo);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.postOneProject = (request, response) => {
	if (request.body.projectDesc.trim() === '') {
		return response.status(400).json({ projectDesc: 'Must not be empty' });
    }
    
    if(request.body.projectName.trim() === '') {
        return response.status(400).json({ projectName: 'Must not be empty' });
    }

    var now = new Date();
    var tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    now.setHours(0,0,0,0);

    const newProject = {
        projectName: request.body.projectName,
        projectDesc: request.body.projectDesc,
        dateCreate: admin.firestore.Timestamp.fromDate(tomorrow),
        deadline: admin.firestore.Timestamp.fromDate(new Date(request.body.deadline)),
        tasks: request.body.tasks
    }
    db
        .collection('projectInfo')
        .add(newProject) 
        .then((doc)=>{
            const responseProject = newProject;
            responseProject.id = doc.id;
            scheduleTasks(responseProject.id);
            return response.json(responseProject);
        })
        .catch((err) => {
            console.error(err);
			return response.status(500).json({ error: 'Something went wrong' });
		});
};

exports.deleteProject = (request, response) => {
    const document = db.doc(`/projectInfo/${request.params.projectId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Project not found' })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.editProject = ( request, response ) => { 
    if(request.body.projectId || request.body.dateCreate){
        response.status(403).json({message: 'Not allowed to edit'});
    }
    let document = db.collection('projectInfo').doc(`${request.params.projectId}`);
    document.update(request.body)
    .then(()=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ 
                error: err.code 
        });
    });
};

