import React, { Fragment, useEffect, useState } from 'react';
import firebase from './firebase';
//import { v4 as uuidv4 } from "uuid";
import { QuerySnapshot } from '@google-cloud/firestore';


function SnapshotFirebase() {
    const [projectInfo, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [deadline, setDeadline] = useState("");

    const ref = firebase.firestore().collection("projectInfo");

    function getProjects() {
        setLoading(true);
        ref.onSnaphot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
    
            setProject(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getProjects();
    }, []);
    
    function addProject(newProject) {
        ref
            .doc(newProject.id)
            .set(newProject)
            .catch((err) => {
                console.error(err);
            });
    
            return (
                <Fragment>
                <h1>Projects</h1>
            </Fragment>
            )
    }
}

module.exports = {SnapshotFirebase, projectInfo, projectName, projectDesc, deadline};
export default SnapshotFirebase;