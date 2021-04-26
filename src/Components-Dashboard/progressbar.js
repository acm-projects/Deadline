
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./progressbar.css";


function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center"  color="green" padding="20px">
       <Typography className="statustext">Progress made so far:</Typography> 
        <Box width="50%" mr={1} >
          <LinearProgress color="primary" variant="determinate" {...props}  />
        </Box>
        <Box minWidth={35} >
          <Typography  variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });
  
  export default function LinearWithValueLabel() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(30);
  
    
  
    return (
      <div className={classes.root}>
        <LinearProgressWithLabel value={progress} />
      </div>
    );
  }