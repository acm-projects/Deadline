import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Button.css"
import logo from '../Deadline-png.png';
import "../App.css"

const ColorButton = withStyles((theme) => ({
    root: {
        color: 'black',
        backgroundColor:'#f05454',
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
                <a style={{textDecorationLine:'none'}} href="/newproject">
                <ColorButton className='style'>
                    New Project
                </ColorButton>
                </a>
                <img className="logo" src={logo} alt="Image cannot be loaded" />
                <a style={{textDecorationLine:'none'}} href="/newproject">
                <ColorButton className='styles'>
                    Log In
                </ColorButton>
                </a>
            </center>
        </div>
    );
}
