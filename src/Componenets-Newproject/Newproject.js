import React from 'react';
import { Component } from "react";
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
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import classNames from "classnames";
//import { firestore } from "./firestore"
import { FormControl, FormControlLabel, InputLabel, Select} from "@material-ui/core";

class newprj extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projectLoading: false,
      projectName: "",
      projectDesc: "",
      deadline: "",
      tasks: [],
      tempTasks: [],
      complexity: "",
      type: ""
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



  //const [anchorEl, setAnchorEl] = React.useState(null);

  handleClick = (event) => {
    //setAnchorEl(event.currentTarget);
    alert("Your project is submitted successfully!");
    event.preventDefault();
    this.setState({ projectLoading: true });
    const projectData = {
      projectName: this.state.projectName,
      projectDesc: this.state.projectDesc,
      deadline: this.state.deadline,
      tasks: this.state.tasks
    };

    axios
      .post(
        "http://localhost:5000/deadline-17bb4/us-central1/api/project",
        projectData
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
          projectLoading: false,
        });
      });

  };

  handleTasks = (event) => {
    var complexityInt = parseInt(this.state.complexity)
    
    this.state.tempTasks.push({
      name: this.state.tasks,
      status: "Next Up",
      complexity: complexityInt,
      type: this.state.type
    })

    var tempTasks2 = this.state.tempTasks;
    this.setState({tasks: []})
    this.setState({tasks: tempTasks2})
    console.log(this.state.tasks)
  };

  ColorButton = withStyles((theme) => ({
    root: {
      color: 'black',
      backgroundColor: '#FFB800',
      fontFamily: 'Magra',
      fontSize: '12px',
      marginTop: '20px',
      marginLeft: '30px',
      '&:hover': {
        backgroundColor: 'yellow',
      },
    },
  }))(Button);


  render() {
    const { classes } = this.props;
    const { errors, projectLoading } = this.state;
    const valuetext = (value) => `${value}`

    return (

      <div>
        <DenseAppBar />
        <Box className="newprojectToolbar" color='red'>
          <header className='headerPrompt'><center>Welcome! Let's get you started</center></header>
          <center> <Typography className='quote'>“Don’t judge each day by the harvest you reap but by the seeds that you plant.”
          - Robert Louis Stevenson</Typography></center>
        </Box>

        <form className='input' noValidate autoComplete="off">
          <form noValidate autoComplete="off">
              <Typography className='promptStatement'><b>What is the name of your project?</b></Typography>
              <TextField className = 'projectNameText' id="projectName" variant="filled" label="Project Name" name="projectName" 
                autoComplete="projectName"
                onChange={this.handleChange}
                value={this.state.projectName} />
             
                <Typography className='promptStatementright'><b>What is your estimated Deadline?</b></Typography>
                <TextField id="deadline" variant="filled" label="MM/DD/YYYY" name="deadline" className = "inputright"
                  autoComplete="deadline"
                  onChange={this.handleChange}
                  value={this.state.deadline} />
            </form>

            <Typography className='promptStatementcenter'><b>Tell us a bit about your project!</b></Typography>
          <form  noValidate autoComplete="off">
            <TextField id="projectDesc"
              label="Project Description"
              variant="filled"
              multiline
              rows={4}
              className='biginput'
              //defaultValue="Project description" 
              name="projectDesc"
              onChange={this.handleChange}
              value={this.state.projectDesc} />
              </form>
          </form>

        <Box className="subHeading">
          <header><center>Get started, add your first task below!</center></header>
        </Box>

        <div>
        <form className='inputText' noValidate autoComplete="off">
        <Typography className='inputText1'><b>1. Task Name</b></Typography>
             <TextField id="tasks" variant="filled" label="Task Name" name="tasks"
              onChange={this.handleChange}
              value={this.state.tasks}
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
      
    {/*<div className="difficulty">
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
      />*/}
       <form className='input' noValidate autoComplete="off">
        <Typography className='difficulty'><b>3. Task Complexity</b></Typography>
             <TextField className='widthbox1' id="complexity" variant="filled" label="Task Complexity" name="complexity"
              onChange={this.handleChange}
              value={this.state.complexity}
              />
        </form>
    </div>
        
        
        <center>
            <Button className="addTask" variant="contained" onClick={this.handleTasks} >
              Add another task
                    </Button></center>
    
          <Button className='submitbutton' id='done ' type='add' variant="contained"
            onClick={this.handleClick} >Submit Project!</Button>
        <div><Box className='bottomBox'/></div>
      </div>
        );

        }
      }
       
  export default newprj;