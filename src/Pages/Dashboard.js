import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import ScrollMenu from'react-horizontal-scrolling-menu';


import AppBarComponent from '../ReUsableComponents/AppBar';
import ButtonTemplate from '../ReUsableComponents/Button';
import Card from '../ReUsableComponents/Cards';

import {
    Paper,
    Grid,
    ButtonGroup,
    Button
} from '@material-ui/core';



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

    buttonPerspective: {
        width: "auto",
        height: "auto",
        marginTop: "30vh",
        marginBottom: "2vh",
        marginLeft: "5vw"
    },

    buttonPerspectiveIndividual: {
        paddingLeft: "3vw",
        paddingRight: "3vw"
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
    ] 
    const classes = useStyles();

    const cardItems = cardArray.map(card => {
        return <Card
                className = {classes.card}
                key = {card.name} 
                cardName = {card.cardName} 
                cardDescription = {card.cardDescription}
                imageURL = {card.url}
                height = {card.height}
                width = {card.width}
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

            <div className = {classes.buttonPerspective}>
                <ButtonGroup 
                  orientation = "horizontal"
                  color = "primary"
                  variant = "text"
                  aria-label = "horizontal contained button group"
                  >
                  <Button className={classes.buttonPerspectiveIndividual}>
                    My Scenarios
                  </Button>
                  <Button className={classes.buttonPerspectiveIndividual}>
                    My Archive
                  </Button>
                  <Button className={classes.buttonPerspectiveIndividual}>
                    My Templates
                  </Button>
                  <Button className={classes.buttonPerspectiveIndividual}>
                    My Progress
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






// list of items
/*const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
  ];
   
  // One item component
  // selected prop will be passed
  const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };
   
  // All items component
  // Important! add unique key
  export const Menu = (list, selected) =>
    list.map(el => {
      const {name} = el;
   
      return <MenuItem text={name} key={name} selected={selected} />;
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
   
  const selected = 'item1';
   
  class App extends Component {
    constructor(props) {
      super(props);
      // call it again if items count changes
      this.menuItems = Menu(list, selected);
    }
   
    state = {
      selected
    };
   
    onSelect = key => {
      this.setState({ selected: key });
    }
   
   
    render() {
      const { selected } = this.state;
      // Create menu from items
      const menu = this.menuItems;
   
      return (
        <div className="App">
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
          />
        </div>
      );
    }
  } */




export default Dashboard;