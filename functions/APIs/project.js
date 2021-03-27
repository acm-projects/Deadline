const { db } = require('../util/admin');

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
                    deadline: doc.data().deadline
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
    
    const newProject = {
        projectName: request.body.projectName,
        projectDesc: request.body.projectDesc,
        dateCreate: new Date().toISOString(),
        deadline: request.body.deadline
    
    }
    db
        .collection('projectInfo')
        .add(newProject)
        .then((doc)=>{
            const responseProject = newProject;
            responseProject.id = doc.id;
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

