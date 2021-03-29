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
                    <Route path="/home" exact component={App} />
                    <Route path="/thewall" component={TheWall} />
                    <Route path="/calendar" component={CalendarMain} />
                </Switch>
            </Router>
        )
    }
}