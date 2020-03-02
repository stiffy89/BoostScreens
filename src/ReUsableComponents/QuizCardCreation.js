import React from 'react';

import {
    Typography,
    Paper,
    ListItem,
    List,
    InputBase,
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "auto",
        backgroundColor: "#e8e4d5",
        paddingBottom: "1vh",
        overflow: "auto",
    },

    question: {

    },

    answer: {

    },

    li: {
        alignContent: "center"
    },

    heading: {
        marginTop: '2vh',
        marginBottom: '2vh',
        marginLeft: '3.5vw'
    }
});

function TextArea(placeHolder) {

    const markupStyle = {
        listItem: {
            justifyContent: "center",
            alignItems: "flex-start",
            paddingBottom: "2vh"
        },

        paperItem: {
            width: "90%",
            height: 'auto',
            backgroundColor: "#cfcbc0"
        },

        inputBase: {
            marginLeft: "2%",
            marginRight: "2%",
            marginTop: "2%",
            marginBottom: "2%",
            width: "96%"
        }


    };

    return (
        <ListItem style = {markupStyle.listItem}>
            <Paper 
                style = {markupStyle.paperItem} 
                component="form"
            >
               <InputBase
                    style = {markupStyle.inputBase}
                    placeholder = {placeHolder}
                    multiline = "true"
                    rowsMax = "4"
               />
            </Paper>
        </ListItem>
        
    )
}

function QuizCardCreation ()
{
    const classes = useStyles();

    return (
        <List className = {classes.root}>
            <Typography  className = {classes.heading} variant='h7' color='primary'>
                Quiz Template
            </Typography>
             {TextArea("Please enter your question")}
        </List>
    )
}

export default QuizCardCreation;

//grey box
// input field for question
// input field for answer

/*<InputBase type="text" multiline = "true" rowsMax = "4" style={markupStyle.inputBase}>
</InputBase>*/