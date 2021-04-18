import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import "./Nav.css"
import Button from "@material-ui/core/Button";

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
                <a style={{textDecorationLine:'none'}} href="/">
                    <ColorButton>Home</ColorButton>
                </a>
                <a style={{textDecorationLine:'none'}} href="/newproject">
                <ColorButton>New Project</ColorButton>
                </a>

                <a style={{textDecorationLine:'none'}} href="/calendar">
                <ColorButton>Calendar View</ColorButton>
                </a>

                

                <a style={{textDecorationLine:'none'}} href="/thewall">
                <ColorButton>The Wall</ColorButton>
                </a>

                <a style={{textDecorationLine:'none'}} href="/dashboard">
                <ColorButton>Dashboard</ColorButton>
                </a>

                
                <ColorButton>Help</ColorButton>
                
            </Toolbar>
        </div>
    );
}