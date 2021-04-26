import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./buttons.css"
import "../App.css"


const ColorButton = withStyles((theme) => ({
    root: {
        color: 'black',
        fontFamily: 'Magra',
        fontSize: '18px',
        marginTop: '30px',
        alignContent: 'right',
        
    },
}))(Button);

export default function CustomizedButtons() {

    return (
        <div>
            <center>
                <ColorButton className='slowbutton' variant="contained">
                    Want to take things slower?
                </ColorButton>
                
                <ColorButton className='fastbutton' variant="contained">
                    Want to speed things up?
                </ColorButton>
            </center>
        </div>
    );
}
