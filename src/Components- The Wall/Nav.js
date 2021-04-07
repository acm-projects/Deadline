import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import "./Nav.css"
import Button from "@material-ui/core/Button";
import history from "./history";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor:'#30475E',
        fontFamily: 'Magra',
        fontSize: '15px',
        '&:hover': {
            backgroundColor: '#5887b7',
        },
    },
}))(Button);

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar variant="dense" className="color-thewall">
                <ColorButton onClick={() => history.push('/')}>Home</ColorButton>
                <ColorButton onClick={() => history.push('/calendar')}>Calendar View</ColorButton>
                <ColorButton>Add Tasks</ColorButton>
                <ColorButton>Sharing Options</ColorButton>
                <ColorButton onClick={() => history.push('/newproject')}>New Project</ColorButton>
                <ColorButton onClick={() => history.push('/thewall')}>The Wall</ColorButton>
                <ColorButton>Help</ColorButton>
                <ColorButton>Change Project</ColorButton>
            </Toolbar>
        </div>
    );
}