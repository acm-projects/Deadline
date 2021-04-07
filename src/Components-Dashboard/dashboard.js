import React from 'react'
import DenseAppBar from "../Components- The Wall/Nav";
import "./dashboard.css";
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
import { positions } from '@material-ui/system';
import {withStyles} from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

import "./Columns.css"
import "./Nav.css"

import Draggable from 'react-draggable';
import LinearWithValueLabel from './progressbar';

export default function Dashboard() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const ColorButton = withStyles((theme) => ({
      root: {
          color: 'black',
          backgroundColor:'#FFB800',
          fontFamily: 'Magra',
          fontSize: '12px',
          marginTop: '20px',
          '&:hover': {
              backgroundColor: 'yellow',
          },
      },
  }))(Button);
  

        return (
        
             <div class = 'bg'>
             <DenseAppBar/>


             <Box className="dashboardToolbar" >
                     <header className='headerPrompt' verticalalign='center'>Project Name </header>
                     <Typography align='right'>Expected Deadline Date</Typography>
                     </Box>
                  <div className="blankSection"> <Box className="today2" id="tasks-today"> <Typography align='left'>1. Create wireframes</Typography></Box>
             
             <Box className="today"><center>Tasks for today</center></Box>
             <Box className="progress3"><center>Current task</center></Box>
             <Box className="progress4"><center>Tasks for today</center></Box>
             </div>  
             <div className="bottomSection"><LinearWithValueLabel /></div>
             


            </div>
            );
    }

    