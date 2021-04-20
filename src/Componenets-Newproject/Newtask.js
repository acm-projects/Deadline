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
import { spacing } from '@material-ui/system';
import { Component } from "react";
import axios from "axios";

class Newtask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskLoading: false,
      taskName: "",
      taskType: "",
      taskComplexity: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI != undefined) {
      if (nextProps.UI.errors) {
        this.setState({
          errors: nextProps.UI.errors,
        });
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  handleAddTasks = (event) => {
    
    event.preventDefault();
    this.setState({ taskLoading: true });
    const taskData = {
      taskName: this.state.taskName,
      taskType: this.state.taskType,
      taskComplexity: this.state.taskComplexity,
    };
    axios
      .post(
        "https://us-central1-deadline-17bb4.cloudfunctions.net/api/project",
         taskData
      )

      .then(() => {
        // localStorage.setItem("projectInfo",  )
        // this.setState({ projectLoading: false});
        this.props.history.push("/");
      }
      )

      .catch((error) => {
        this.setState({
          errors: error.response,
          taskLoading: false,
        });
      });


  };
  render() {
    const { classes } = this.props;
    const { errors, taskLoading } = this.state;
  
        return (
            <div className='bg' >
        <form className='inputText' noValidate autoComplete="off">
             <TextField id="taskName" variant="filled" label="Task Name" name="taskName"
              onChange={this.handleChange}
              value={this.state.taskName}
              />
                      
        </form>
<Typography className='inputText'><b>2. What kind of task is it?</b></Typography>
<form className ='inputBox'>
  <TextField id="taskType" variant="filled" label="Task Type" name="taskType"
              onChange={this.handleChange} value={this.state.taskType} 
              />
  </form>
    <Typography id="discrete-slider-small-steps" gutterBottom>
        Difficulty Scale
      </Typography>
    
      <Slider
        defaultValue={0.5}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-steps"
        step={1}
        marks
        min={0}
        max={5}
        
        valueLabelDisplay="auto"
        id="difficulty-slider"
        className ='slider'
      />
    
                </div>      
        );
}
}
export default Newtask;