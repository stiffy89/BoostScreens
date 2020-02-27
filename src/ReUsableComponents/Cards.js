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
        margin:"30px",
        width: "200px",
        height: "300px"
    },

    dimentions: {
        width: "200px",
        height: "150px"
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
                        component = "img"
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