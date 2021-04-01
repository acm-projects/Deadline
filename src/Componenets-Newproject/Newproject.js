import React from 'react'
import DenseAppBar from "../Components- The Wall/Nav";
import "./Newproject.css";
import "./Newtask";
import Toolbar from "@material-ui/core/Toolbar";
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Newtask from './Newtask';



export default function Newproject() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
        return (
            <div className='bg' >
               
              <DenseAppBar/>
             <Box className="newprojectToolbar" color='red'>
                     <header className='headerPrompt'><center>Welcome! Let's get you started</center></header>
            </Box>
             <Typography className='promptStatement'><b>What is the name of your project?</b></Typography>
                    <form className='input' noValidate autoComplete="off">
                             <TextField id="standard-basic" label="Project Name" />
                    </form>
                    <Typography className='promptStatement'><b>What is your estimated Deadline</b></Typography>
                    <form className='input' noValidate autoComplete="off">
                             <TextField id="standard-basic" label="MM/DD/YYYY" />
                    </form>

                    <Typography className='promptStatement'><b>Tell us a bit about your project</b></Typography>
                    <form className='biginput' noValidate autoComplete="off">
                             <TextField id="standard-multiline-static"
                             
          
          multiline
          rows={4}
          defaultValue="Project description" />
                    </form>
                    <header className='subHeading' fontcolor='black'><center>Get started, add your first task below!</center></header>
                    <Newtask />
                   
            </div>
            );
    }

    