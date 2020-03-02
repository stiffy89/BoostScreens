import React from 'react';

import {
    IconButton,
    ListItemIcon,
    Divider,
    List,
    Grid

} from '@material-ui/core';

import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import MovieIcon from '@material-ui/icons/Movie';
import ImageIcon from '@material-ui/icons/Image';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid: {
        width: "15%",
        height: "auto"
    }
})

function SideBarAction () 
{
    const classes = useStyles();

    return (
        <Grid className = {classes.grid} container direction="column" justify="center" alignItems="flex-start"> 
            <IconButton>
                <MovieIcon/>
            </IconButton>

            <IconButton>
                <MovieIcon/>
            </IconButton>

            <IconButton>
                <MovieIcon/>
            </IconButton>

            <IconButton>
                <MovieIcon/>
            </IconButton>
        </Grid>
    )

}

export default SideBarAction;