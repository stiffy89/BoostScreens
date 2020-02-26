import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {
    Paper,
    Grid,


} from '@material-ui/core';

const useStyles = makeStyles(theme=> ({

    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fffef7",
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 3,
        width: theme.spacing (30),
        height: theme.spacing (50)
    },
}));

function LoginTile () 
{
    const classes = useStyles();

    return (
        <div>
        <Grid container justify="center" alignItems="center">
            <Grid item>
                <Paper className = {classes.paper} >

                </Paper>
            </Grid>
        </Grid>
        </div>
    )
}

export default LoginTile;