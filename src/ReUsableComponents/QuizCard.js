import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {
    ListItem,
    Paper,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles ({
    root: {
        paddingBottom: '3vh'
    },

    cardPaper: {
        height: 'auto',
        width: "100%",
        backgroundColor: "#fcf9ed",
    },
    
    heading: {
        marginTop: "1vh",
        marginLeft: "1vw",
        paddingBottom: "1vh"
    },

    questions: {
        marginLeft: "1vw",
        paddingBottom: "1vh"
    },

    answer: {
        marginLeft: "1vw",
        paddingBottom: "1vh"
    }
});

const quizAnswers = (answers) => {
    let answerBlock = null;

    answerBlock = answers.map(answer => {
        return (
            <Typography style = {{marginLeft: "1vw", paddingBottom:"1vh"}} color="primary">
                {answers.indexOf(answer) + 1}. {answer}
            </Typography>
        )
    });

    return answerBlock;
}

function QuizCard (props) 
{
    const classes = useStyles ();

    return (
     
        <ListItem className = {classes.root}>
            <Paper className = {classes.cardPaper}>
                <Typography className = {classes.heading} variant="h6" color="primary">
                    {props.heading}
                </Typography>
                <Typography className = {classes.questions} color="primary">
                    {props.question}
                </Typography>
                {quizAnswers(props.answer)}
            </Paper>
        </ListItem>
         
    )
}

export default QuizCard;