import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "react-router-dom";
import history from "./Components- The Wall/history";
import "../src/Components- The Wall/style.css"

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById("root"));

const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };