import "../App.css"
import DenseAppBar from "../Components- The Wall/Nav";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import logo from '../Deadline-png.png';
import CustomizedButtons from "./Button";
import AboutUs from "./AboutUs";
import Box from '@material-ui/core/Box';

function HomePage() {
    return (
        <div>
        <DenseAppBar/>
       <Box className="toolbar">
        <img className="logo" src={logo} alt="Image cannot be loaded" />
       </Box>
        <CustomizedButtons/>
        <AboutUs/>
        </div>
    )
}

export default HomePage;