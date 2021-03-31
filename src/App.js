import './App.css';
import React from "react";
import Firebase from "firebase";
import config from "./config";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TheWall from "./Components- The Wall/TheWall";
import CalendarMain from "./Components- Calendar/CalendarMain";
import HomePage from "./Components-Homepage/HomePage";

function App() {
  return (
      <Router>
          <Switch>
              <div>
              <Route exact path="/">
                  <HomePage/>
              </Route>
              </div>
            </Switch>

            <Switch>
                <div>
                <Route exact path="/thewall">
                    <TheWall/>
                </Route>
                </div>
            </Switch>

          <Switch>
              <div>
                  <Route exact path="/calendar">
                    <CalendarMain/>
                  </Route>
              </div>
          </Switch>
      </Router>
  );
}

export default App;
