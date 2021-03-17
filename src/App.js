import './App.css';
import DenseAppBar from "./Components/Nav Bar/NavBar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import logo from './Deadline-png.png';
import Typography from '@material-ui/core/Typography';
import CustomizedButtons from "./Components/Buttons/Buttons"
import AboutUs from "./Components/About Us/AboutUs";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Firebase from "firebase";
import config from "./config";

let classes = {
    logo: {
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '500%',
        maxHeight: '520%',
        minHeght: '410%',
    },
    logoHorizontallyCenter: {
        position: 'absolute',
        left: '50%',
        top: '50%', 
        left: '50%',
        right: '25%',
        transform: 'translate(-70%, -50%)',
        colour: '#1A4645'
    }
};

function App() {
  return (
    <div className="App">
      <DenseAppBar/>
        <AppBar position="flex"> 
            <Toolbar variant="dense" className="toolbar">
                <center>
                <div style={classes.logoHorizontallyCenter}>
                    <img src={logo} className={classes.logo} alt="this is alt " />

                </div>
                <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
                </center>
            </Toolbar>
            
        </AppBar>
        <CustomizedButtons/>
        <AboutUs/>
    </div>

  );
}

export default App;
