import DenseAppBar from "./Nav";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import "./TheWall.css"
import Box from '@material-ui/core/Box';
import "./Columns.css"
import "./Nav.css"
/*import ToDoList from "./ToDo";
import Drag from "./Dragbar";
import Homepage from "./Homepage";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend"*/
import DragTest from "./DragTest";

function TheWall() {
    return (
        <div>
            <DenseAppBar/>
            <Toolbar className="toolbars" variant="dense">
                The Wall
            </Toolbar>
            {/*<Box className="next"><center>Next Up</center></Box>
            <Box className="Notes2"/>
            <Box className="progress2"/>
            <Box className="complete2"/>
            <Box className="next2">
                <center><ToDoList/></center>
            </Box>
            <Box className="progress1"><center>In Progress</center></Box>
            <Box className="complete"><center>Complete</center></Box>
            <Box className="Notes"><center>Notes</center></Box>
            <Box className="bottom"/>
            <Drag/>*/}
            <DragTest/>
         
        </div>
    );
}

export default TheWall;