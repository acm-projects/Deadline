import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import "./Buttons.css"
import { FormatAlignRight } from '@material-ui/icons';

const BootstrapButton = withStyles({
  root: {
    
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button); 

const ColorButton = withStyles((theme) => ({
  root: {
    color: 'pinblackk',
    backgroundColor:'#F05454',
    padding: "18px 36px",
    fontSize: "18px",
    textAlign: 'right',
    '&:hover': {
      backgroundColor: 'pink',
      
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons() {
  

  return (
    <div>      
      <ColorButton className='style'>
        New Project
      </ColorButton>
    
        <ColorButton  className='style'>
          Log In
        </ColorButton>       
    </div>
  );
}
