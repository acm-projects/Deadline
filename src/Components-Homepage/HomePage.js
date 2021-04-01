import "../App.css"
import DenseAppBar from "../Components- The Wall/Nav";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import CustomizedButtons from "./Button";
import AboutUs from "./AboutUs";
import Box from '@material-ui/core/Box';

function HomePage() {
    return (
        <div>
        <DenseAppBar/>
            <Box className="toolbar">
                <div className="title">
                Deadline
                <br/>
                <center>
                <h2>Your Personal Project Manager</h2>
                </center>
                </div>
            </Box>
        <CustomizedButtons/>
        <AboutUs/>
        <Box className="last-box"/>
        </div>
    )
}

export default HomePage;