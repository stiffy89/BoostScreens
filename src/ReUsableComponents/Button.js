//THIS IS A BUTTON WHICH IS ABLE TO TRANSFORM INTO DIFFERENT TYPES OF BUTTONS BY USING REDUCER

import React from 'react';

import {
    Button
} from '@material-ui/core';

function ButtonTemplate (props) 
{
    return (
        <Button 
            
            variant={props.variant} 
            color={props.color} 
            component={props.button}>

            {props.buttonName}

        </Button>
    )
}

export default ButtonTemplate;