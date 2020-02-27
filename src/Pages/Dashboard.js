import React from 'react';

import ScrollMenu from'react-horizontal-scrolling-menu';


import AppBarComponent from '../ReUsableComponents/AppBar';
import ButtonTemplate from '../ReUsableComponents/Button';
import Card from '../ReUsableComponents/Cards';

import {
    Paper,
    GridList,
    Grid,
    ButtonGroup,
    Button
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles ({

    root: {
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh"
    },

    button: {
        marginLeft: "20px",
        marginTop: "20px"
    },

    paper: {
        width: "100vw",
        height: "60vh",
        marginBottom: "10vh",
        backgroundColor: "#f5eed7",
    },

    perspectiveMode: {
        width: "auto",
        height: "auto",
        marginTop: "30vh",
        marginLeft: "10vw",
        marginBottom: "1vh"
    },

    perspectiveButton: {
      paddingLeft: "30px",
      paddingRight: "30px"
    }
});


function Dashboard (props) 
{
    //just for now, we're gunna hard code the cards that we want to create
    const cardArray = [
        {
            cardName: "Pony",
            cardDescription: "Pony are small horses",
            url: "https://source.unsplash.com/800x450/?pony",
            height: "140",
            width: "140"
        },

        {
            cardName: "Horse",
            cardDescription: "Pony are small horses",
            url: "https://source.unsplash.com/800x450/?horse",
            height: "140",
            width: "140"
        },

        {
            cardName: "Dog",
            cardDescription: "Pony are small horses",
            url: "https://source.unsplash.com/800x450/?dog",
            height: "140",
            width: "140"
        },

        {
            cardName: "Cat",
            cardDescription: "Pony are small horses",
            url: "https://source.unsplash.com/800x450/?cat",
            height: "140",
            width: "140"
        },

        {
            cardName: "Alligator",
            cardDescription: "Pony are small horses",
            url: "https://source.unsplash.com/800x450/?alligator",
            height: "140",
            width: "140"
        },
        {
            cardName: "Lion",
            cardDescription: "Pony are small horses",
            url: "https://source.unsplash.com/800x450/?lion",
            height: "140",
            width: "140"
        }
    ];
    
    const buttonArray = [
      "My Scenario",
      "Archive",
      "Template",
      "Progress"
    ];

    const classes = useStyles();

    const cardItems = cardArray.map(card => {
        return <Card
                key = {card.name} 
                cardName = {card.cardName} 
                cardDescription = {card.cardDescription}
                imageURL = {card.url}
                height = {card.height}
                width = {card.width}
                />
    });

    const buttonGroup = buttonArray.map(button => {
      return <Button
              key = {button}
              buttonName={button}
              variant="text"
              component="button"
              color="primary"
            />
    });

    const Arrow = ({ text, className }) => {
        return (
          <div
            className={className}
          >{text}</div>
        );
      };

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

    return (
        <div className = {classes.root}>
            <AppBarComponent name="Dashboard"/>
            
            <div className = {classes.button}>
              <ButtonTemplate
                  buttonName = "Create Quiz"
                  variant = "contained"
                  color = "primary"
                  component = "button"
              />
            </div>

            <div className = {classes.perspectiveMode}>
              <ButtonGroup
                orientation="horizontal"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
              >
                <Button className = {classes.perspectiveButton}>
                  My Scenario
                </Button>

                <Button className = {classes.perspectiveButton}>
                  Archive
                </Button>

                <Button className = {classes.perspectiveButton}>
                  Template
                </Button>

                <Button className = {classes.perspectiveButton}> 
                  Progress
                </Button>
              </ButtonGroup>
            </div>

            <div className = {classes.paper}>
              <ScrollMenu
                  data={cardItems}
                  arrowLeft={ArrowLeft}
                  arrowRight={ArrowRight}
              />
            </div>
        </div>
    )
}




export default Dashboard;