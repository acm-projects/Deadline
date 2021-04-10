const { db, admin } = require('../util/admin');

async function addTasks (pName, pDesc, pDeadline) {
const docRef = db.collection('projectInfo').doc('testAddDoc');
var startDate = new Date();

try{
    await docRef.set({
        "projectName": pName,
        "projectDesc": pDesc,
        "dateCreate": startDate,
        "deadline": pDeadline,
        "tasks": {"task1": {"tasktype": "testing adding", "taskComplexity": 5}},
        });
  }
    
  catch (err) {
    console.log('Error adding document', err);
  } 

pDeadline = db.Timestamp.fromDate(new Date(pDeadline));
}

async function printProjectTasks() {
    try{
        const projectsRef = db.collection('projectInfo');
        const snapshot = await projectsRef.get();
        snapshot.forEach(doc => {
        console.log(doc.data().projectName, '=>', doc.data());
        console.log("\n");
        });
    }
    catch (err) {
        console.log('Error getting documents', err);
    }
}

//printProjectTasks();

async function scheduleTasks(passedID) {
    try{
        const projectRef = db.collection('projectInfo').doc(passedID);
        const snapshot = await projectRef.get();
        var startDate  = snapshot.data().dateCreate;
        var deadline = snapshot.data().deadline;
        var tasks = snapshot.data().tasks

        // calculate the number of days between the start and end date 
        var difference = deadline - startDate;
        var numDays = difference / 86400;

        // count the number of tasks in the project
        snapshot.forEach(function (snapshot) {
            var key = snapshot.key();
            var obj = snapshot.val();
            console.log(key)
        });
        let numTasks = 0;
        
        console.log('############################################ ' + numTasks + ' ###########################################');


        /* update to database
        const res = await docRef.update({
            duration: numDays
        }, {merge: true});
        */
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
    now.setHours(0,0,0,0);

    const newProject = {
        projectName: request.body.projectName,
        projectDesc: request.body.projectDesc,
        dateCreate: admin.firestore.Timestamp.fromDate(now),
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
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
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

