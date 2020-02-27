import React from 'react';

import {
    AppBar,
    Toolbar,
    Typography

} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    typography: {
        marginLeft: 15
    }
});


function AppBarComponent (props) 
{
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" className = {classes.typography}>
                        {props.name}
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default AppBarComponent;