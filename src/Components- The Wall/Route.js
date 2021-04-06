import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import CalendarMain from "../Components- Calendar/CalendarMain";
import App from "../App";
import TheWall from "./TheWall";
import history from './history';



export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={() => <App/>} />
                    <Route exact path="/thewall" component={() => <TheWall/>} />
                    <Route exact path="/calendar" component={() => <CalendarMain/>} />
                </Switch>
            </Router>
        )
    }
}