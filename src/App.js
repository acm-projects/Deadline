import './App.css';
import React, {Component} from "react";
import Firebase from "firebase";
import config from "./config";
import {Switch, Route} from "react-router-dom";
import {Router} from 'react-router-dom'
import TheWall from "./Components- The Wall/TheWall";
import CalendarMain from "./Components- Calendar/CalendarMain";
import HomePage from "./Components-Homepage/HomePage";
import Newproject from "./Componenets-Newproject/Newproject";
import Dashboard from './Components-Dashboard/dashboard';
import history from "./Components- The Wall/history";

class App extends Component {
    render() {
        return (
            <div>
            <Router history={history}>
                <div>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/thewall" component={TheWall}/>
                            <Route exact path="/dashboard" component={Dashboard}/>
                            <Route path="/calendar" component={CalendarMain}/>
                            <Route path="/newproject" component={Newproject}/>
                            </Switch>
                 </div>
                </Router>
            </div>
        );
    }
}

export default App;
