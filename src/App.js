import './App.css';
import React from "react";
import Firebase from "firebase";
import config from "./config";
import {Switch, Route} from "react-router-dom";
import {Router} from 'react-router-dom'
import TheWall from "./Components- The Wall/TheWall";
import CalendarMain from "./Components- Calendar/CalendarMain";
import HomePage from "./Components-Homepage/HomePage";
import Newproject from "./Componenets-Newproject/Newproject";
import dashboard from "./Components-Dashboard/dashboard";
import Dashboard from './Components-Dashboard/dashboard';
import history from "./Components- The Wall/history";

function App() {
  return (
      <Router history={history}>
          <Switch>
              <div>
              <Route exact path="/" component={HomePage}/>
              </div>
            </Switch>

            <Switch>
                <div>
                <Route path="/thewall" component={TheWall}/>
                </div>
            </Switch>
           < Switch>
                <div>
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
                </div>
            </Switch>


          <Switch>
              <div>
                  <Route path="/calendar" component={CalendarMain}/>
              </div>
          </Switch>
          <Switch>
                <div>
                  <Route path="/newproject" component={Newproject}/>
               </div>
              </Switch>
      </Router>
  );
}

export default App;
