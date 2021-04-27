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
import { FormControl, FormControlLabel, InputLabel, Select} from "@material-ui/core";
class Newtask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskLoading: false,
      tasks: "",
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
    var axios = require('axios');
    
    var config = {
      method: 'post',
      url: 'http://localhost:5000/deadline-17bb4/us-central1/api/project',
      headers: { }
    };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    const taskData = {
      taskName: this.state.taskName,
      taskType: this.state.taskType,
      taskComplexity: this.state.taskComplexity,
    };
    axios(config)
      .post(
        "https://us-central1-deadline-17bb4.cloudfunctions.net/api/project",
         taskData
      )

      .then(() => {
        
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
        <Typography className='inputText1'><b>1. Task Name</b></Typography>
             <TextField id="taskName" variant="filled" label="Task Name" name="taskName"
              onChange={this.handleChange}
              value={this.state.taskName}
              />
                      
        </form>

<Typography className='inputTextYo'><b>2. What kind of task is it?</b></Typography>
        <FormControl className='widthbox' variant="outlined" margin="dense">
                      <InputLabel>Task Type</InputLabel>
                      <Select
                        label="Task Type"
                        name="taskType"
                        value={this.state.taskType}
                        onChange={this.handleChange}
                      >
                        <MenuItem selected value="Coding">
                          Coding
                        </MenuItem>
                        <MenuItem value="Presentation">
                          Presentation
                        </MenuItem>
                        <MenuItem value="Writing">
                          Writing
                        </MenuItem>
                        <MenuItem value="Design">
                          Design
                        </MenuItem>
                        <MenuItem value="Other">
                          Other
                        </MenuItem>
                      </Select>
                    </FormControl>

    <div className="difficulty">
      Difficulty Scale
    </div>
      <Slider
        defaultValue={1}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-steps"
        step={1}
        marks
        min={0}
        max={5}
        valueLabelDisplay="auto"
        id="difficulty-slider"
        className ='widthbox1'
        style={{ maxWidth: 200 }}
      />
            </div>
        );
}
}
export default Newtask;