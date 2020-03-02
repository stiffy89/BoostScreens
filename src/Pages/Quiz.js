import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";

import AppBarComponent from '../ReUsableComponents/AppBar';
import ButtonComponent from '../ReUsableComponents/Button';
import QuizCardComponent from '../ReUsableComponents/QuizCard';
import QuizCreationComponent from'../ReUsableComponents/QuizCardCreation';
import SideBarAction from '../ReUsableComponents/SideBarAction';

import {
    Paper,
    Button,
    ButtonGroup,
    ListItem,
    List,
    InputBase,
    Breadcrumbs,
    Link,
    Typography,
    Grid

} from "@material-ui/core";




const useStyles = makeStyles ( theme => ({

    buttonGroup: {
        marginLeft: "20vw",
        marginTop: "2vh"
    },

    quizActionButton: {
        marginLeft: "15vw",
        marginTop: "7vh",
        marginBottom: "1vh"
    },

    paper: {
        position: "absolute",
        backgroundColor: "#f5eed7",
        width: "60vw",
        height: "60vh",
        marginTop: "1vh",
        marginLeft: "20vw"
    },

    exitButton: {
        width: "auto",
        height: "auto",
        marginTop: "2vh",
        marginLeft: "2vw"
    },

    list: {
        width: '47.5vw',
        height: '47vh',
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        marginLeft: '12vw',
        overflow: 'auto',
        maxHeight: "100%",
    }
}));

function Quiz (props) 
{

    const [dummyData, setDummyData] = useState(props.data);

    const classes = useStyles();

    const completedCards = dummyData.map(singleData => { 
             return   <QuizCardComponent
                        key = {singleData.key}
                        heading = {singleData.name}
                        question = {singleData.question}
                        answer = {singleData.answer}
                    />
        });

    return (
        <div>
            <AppBarComponent name="Quiz Content"/>
           
            <div className = {classes.exitButton}>
                <ButtonComponent buttonName="Exit" component="button" color="primary" variant="contained"/>
            </div>
           
           <div>
            <ButtonGroup className = {classes.buttonGroup} size="large" color="primary" variant = "contained">
                <Button>
                    Details
                </Button>
                <Button>
                    Terrain
                </Button>
                <Button>
                    Content
                </Button>
                <Button>
                    Deploy
                </Button>
            </ButtonGroup>
            <Paper className = {classes.paper}>
                <Breadcrumbs className = {classes.quizActionButton} aria-label="breadcrumb">
                    <Typography color="textPrimary">Question</Typography>
                    <Link color="inherit">
                    Answer
                    </Link>
                    <Link color="inherit">
                    Preview
                    </Link>
                </Breadcrumbs>
                <Grid container direction="row">
                    <SideBarAction/>
                    <List className = {classes.list}>
                        {completedCards}
                        <QuizCreationComponent/>
                    </List>
                </Grid>
            </Paper>
           </div>
            
        </div>
    )
}

export default Quiz;

/*<li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map(item => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>*/

//appbar
//sidebar area
//main working section
// submit


