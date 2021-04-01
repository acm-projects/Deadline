import './App.css';
import React from "react";
import Firebase from "firebase";
import config from "./config";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TheWall from "./Components- The Wall/TheWall";
import CalendarMain from "./Components- Calendar/CalendarMain";
import HomePage from "./Components-Homepage/HomePage";
import Newproject from "./Componenets-Newproject/Newproject";

function App() {
  return (
      <Router>
          <Switch>
              <div>
              <Route path="/home">
                  <HomePage/>
              </Route>
              </div>
            </Switch>

            <Switch>
                <div>
                <Route path="/thewall">
                    <TheWall/>
                </Route>
                </div>
            </Switch>

          <Switch>
              <div>
                  <Route path="/calendar">
                    <CalendarMain/>
                  </Route>
              </div>
          </Switch>
          <Switch>
                <div>
                  <Route path="/newproject">
                    <Newproject/>
                  </Route>
               </div>
              </Switch>
      </Router>
  );
}

export default App;
