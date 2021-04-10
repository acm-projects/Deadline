import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Button.css"
import logo from '../Deadline-png.png';
import "../App.css"
import history from "../Components- The Wall/history";

const ColorButton = withStyles((theme) => ({
    root: {
        color: 'black',
        backgroundColor:'#F05454',
        fontFamily: 'Magra',
        fontSize: '22px',
        marginTop: '40px',
        '&:hover': {
            backgroundColor: '#FC4343',
        },
    },
}))(Button);

export default function CustomizedButtons() {

    return (
        <div>
            <center>
                <ColorButton className='style' onClick={() => history.push('/newproject')}>
                    New Project
                </ColorButton>
                <img className="logo" src={logo} alt="Image cannot be loaded" />
                <ColorButton className='styles'>
                    Log In
                </ColorButton>
            </center>
        </div>
    );
}
