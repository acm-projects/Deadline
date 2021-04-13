iimport React from 'react'
import {Component} from "react";
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
import {withStyles} from '@material-ui/core/styles';
import axios from "axios";
import classNames from "classnames";
//import { firestore } from "./firestore"
​
class newprj extends Component {
  
  constructor(props) {
    super(props);
​
    this.state = {
      projectLoading: false,
      projectName: "",
      projectDesc: "",
      deadline: "",
      tasks: ""
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
​
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
​
  
​
 //const [anchorEl, setAnchorEl] = React.useState(null);
​
  handleClick = (event) => {
      //setAnchorEl(event.currentTarget);
      event.preventDefault();
      this.setState({ projectLoading: true});
      const projectData = {
        projectName: this.state.projectName,
        projectDesc: this.state.projectDesc,
        deadline: this.state.deadline,
        tasks: this.state.tasks
      };
      axios 
      .post(
        "https://us-central1-deadline-17bb4.cloudfunctions.net/api/project",
        projectData
      )
​
      .then(() => {
        // localStorage.setItem("projectInfo",  )
        // this.setState({ projectLoading: false});
        this.props.history.push("/");
      }
      )
​
      .catch((error) => {
        this.setState({
          errors: error.response,
          projectLoading: false,
        });
      });
​
     
    };
  
    //  handleClose = () => {
    //   setAnchorEl(null);
    // };
​
     ColorButton = withStyles((theme) => ({
      root: {
          color: 'black',
          backgroundColor:'yellow',
          fontFamily: 'Magra',
          fontSize: '12px',
          marginTop: '20px',
          '&:hover': {
              backgroundColor: 'green',
          },
      },
  }))(Button);
  
  
       render () {
        const { classes } = this.props;
        const { errors, projectLoading} = this.state;
​
        return(
           
               <div class = 'bg'>
              <DenseAppBar/>
​
​
             <Box className="newprojectToolbar" color='red'>
                     <header className='headerPrompt'><center>Welcome! Let's get you started</center></header>
            </Box>
           
             <Typography className='promptStatement'><b>What is the name of your project?</b></Typography>
             <div className='bg' style={{
              display: 'right',
              alignItems: 'right',
              flexWrap: 'right',
          }} >
            <form className='input' noValidate autoComplete="off">
           
              <TextField id="projectName" variant="filled" label="Project Name" name="projectName" 
              autoComplete="projectName"
               onChange={this.handleChange}
               value={this.state.projectName} />
              
             <span>
             <Typography className='promptStatement'><b>What is your estimated Deadline</b></Typography>
                     <TextField id="deadline" variant="filled" label="MM/DD/YYYY" name="deadline"
                     autoComplete="deadline"
                     onChange={this.handleChange}
                     value={this.state.deadline}/></span>
                     </form>
                     </div>
​
                    <Typography className='promptStatement'><b>Tell us a bit about your project!</b></Typography>
                    <form className='biginput' noValidate autoComplete="off">
                             <TextField id="projectDesc"
                            label="Project Description"
                             variant="filled"
          multiline
          rows={4}
          //defaultValue="Project description" 
          name="projectDesc"
          onChange={this.handleChange}
          value={this.state.projectDesc}/>
                    </form>
​
                    <header className='subHeading' fontcolor='black'><center>Get started, add your first task below!</center></header>
                    <Newtask />
                    <Button 
                    type='add'
                    className='style'
                    onClick={this.handleClick}
                    >
                    Done
                </Button>
            </div>
        );
       }
  }
​
​
  export default newprj;