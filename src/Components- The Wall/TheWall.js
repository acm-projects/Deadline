import DenseAppBar from "./Nav";
import Toolbar from "@material-ui/core/Toolbar";
import React, {Component} from "react";
import "./TheWall.css"
import Box from '@material-ui/core/Box';
import "./Columns.css"
import "./Nav.css"
import ToDoList from "./ToDo";
import Draggable from 'react-draggable';

function TheWall() {
    return (
        <div>
            <DenseAppBar/>
            <Toolbar className="toolbars" variant="dense">
                The Wall
            </Toolbar>
            <Box className="next"><center>Next Up</center></Box>
            <Box className="Notes2"/>
            <Box className="progress2"/>
            <Box className="complete2"/>
            <Box className="next2">
                <center><ToDoList/></center>
                <Draggable
                    bounds="body"
                ><center><Box className="task">
                            Calendar View Page
                        </Box>
                </center>
                </Draggable>
            </Box>
            <Box className="progress1"><center>Progress</center></Box>
            <Box className="complete"><center>Complete</center></Box>
            <Box className="Notes"><center>Notes</center></Box>
            <Box className="bottom"/>
        </div>
    );
}

export default TheWall;