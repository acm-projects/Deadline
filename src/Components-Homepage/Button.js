import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Button.css"

const ColorButton = withStyles((theme) => ({
    root: {
        color: 'black',
        backgroundColor:'#F05454',
        blockSize: '60px',
        fontFamily: 'Magra',
        fontSize: '20px',
        marginTop: '25px',
        marginBottom: '0px',
        '&:hover': {
            backgroundColor: '#FC4343',
        },
    },
}))(Button);

export default function CustomizedButtons() {

    return (
        <div>
            <center>
                <ColorButton className='style'>
                    New Project
                </ColorButton>
                <ColorButton className='styles'>
                    Log In
                </ColorButton>
            </center>
        </div>
    );
}
