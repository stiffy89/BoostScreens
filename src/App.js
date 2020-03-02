import React from 'react';

import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import Quiz from './Pages/Quiz';

function App () 
{
  const dummyData = [   
    {
        name: "Quiz1",
        key: 0,
        question: "What is the most widely used tool?",
        answer: [
          "jaw of life",
          "chainsaw",
          "hydraulic lift",
          "none of the above"
        ]
    },

    {
        name: "Quiz2",
        key: 1,
        question: "What is the most common hazard when removing occupant from vehicle?",
        answer:[
          "oil leak",
          "petrol fire",
          "hazardous gases",
          "car battery"
        ]
    },

    {
        name: "Quiz3",
        key: 2,
        question: "Where would you place paramedics on site?",
        answer: [
          "staging area",
          "area of attack",
          "nearest roundabout",
          "nearest open area"
        ]
    }
  ];

  return (
    <div>
      <Quiz data = {dummyData}/>
    </div>
  )
}

export default App;
