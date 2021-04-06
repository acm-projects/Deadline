import React from 'react'
import DenseAppBar from "../Components- The Wall/Nav";
import "./Newproject.css";
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

export default function Newtask() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    function valuetext(value) {
        return `${value}°C`;
      }
  
        return (
            <div className='bg' >
               

<form className='input' noValidate autoComplete="off">
       1.  <TextField id="standard-basic" label="New Task Name" />
               
</form>
<Typography className='promptStatement'><b>2. What kind of task is it</b></Typography>
<Button aria-controls="simple-menu" aria-haspopup="true" className='input' onClick={handleClick}>
                        Task List
                        </Button>
                        <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                        <MenuItem onClick={handleClose}>1. Presentation</MenuItem>
                        <MenuItem onClick={handleClose}>2. Coding</MenuItem>
                        <MenuItem onClick={handleClose}>3. Wireframes</MenuItem>
                        <MenuItem onClick={handleClose}>4. Design</MenuItem>
                        </Menu>
                        <Typography id="discrete-slider-small-steps" gutterBottom>
        Difficulty Scale
      </Typography>
      <Slider
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={5}
        valueLabelDisplay="auto"
        
      />
                        </div>
        );
}
