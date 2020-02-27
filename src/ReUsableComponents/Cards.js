import React, {useState} from 'react';
import {
    Card,
    CardMedia,
    CardActionArea,
    Typography,
    CardContent
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin:"50px"
    },

    dimentions: {
        width: "140",
        height: "140"
    }
});


function CardsTemplate (props) 
{
    const classes = useStyles();
    
    return (
        <div>
            <Card className = {classes.root}>
                <CardActionArea>
                    <CardMedia
                        className = {classes.dimentions}
                        src = {props.imageURL}
                        component = "image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.cardName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.cardDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardsTemplate;