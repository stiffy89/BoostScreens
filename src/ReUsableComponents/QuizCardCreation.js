import React from 'react';

import {
    Typography,
    Paper,
    ListItem,
    List,
    InputBase
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "300px",
        backgroundColor: "#e8e4d5",
        paddingBottom: "1vh",
        overflow: "auto"
    },

    question: {

    },

    answer: {

    },

    li: {
        alignContent: "center"
    }
});

function TextArea() {

    const markupStyle = {
        listItem: {
            justifyContent: "center",
            alignItems: "flex-start",
            paddingBottom: "2vh"
        },

        paperItem: {
            width: "90%",
            height: "auto",
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
                    placeholder = "please enter your question"
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
             {TextArea()}
             {TextArea()}
             {TextArea()}
        </List>
    )
}

export default QuizCardCreation;

//grey box
// input field for question
// input field for answer

/*<InputBase type="text" multiline = "true" rowsMax = "4" style={markupStyle.inputBase}>
</InputBase>*/