import React from 'react';

import ScrollMenu from'react-horizontal-scrolling-menu';


import AppBarComponent from '../ReUsableComponents/AppBar';
import Button from '../ReUsableComponents/Button';
import Card from '../ReUsableComponents/Cards';

import {
    Paper,
    GridList,
    Grid
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
        marginTop: "30vh",
        marginBottom: "10vh",
        display: "flex",
        backgroundColor: "#f5eed7",
        overflow: "hidden"
    },

    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },

    grid: {
        width: "200vw"
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
                key = {card.name} 
                cardName = {card.cardName} 
                cardDescription = {card.cardDescription}
                imageURL = {card.url}
                height = {card.height}
                width = {card.width}
                />
    });

    const cardContainer = () => {
        return (
            <Grid container>
                {cardItems}
            </Grid>
        )
    }

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
                <Button
                    buttonName = "Create Quiz"
                    variant = "contained"
                    color = "primary"
                    component = "button"
                />
            </div>

            <ScrollMenu
                data={cardItems}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
            />
            
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