import React from 'react';

import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import Quiz from './Pages/Quiz';

function App () 
{

  const dummyData = [
        
    {
        name: "quiz1",
        key: 0,
        question: "what is the most widely used tool?",
        answer1: "jaw of life",
        answer2: "chainsaw",
        answer3: "hydraulic lift",
        answer4: "none of the above"
    },

    {
        name: "quiz2",
        key: 1,
        question: "what is the most common hazard when removing occupant from vehicle?",
        answer1: "oil leak",
        answer2: "petrol fire",
        answer3: "hazardous gases",
        answer4: "car battery"
    },

    {
        name: "quiz3",
        key: 2,
        question: "where would you place paramedics on site?",
        answer1: "staging area",
        answer2: "area of attack",
        answer3: "nearest roundabout",
        answer4: "nearest open area"
    }
  ];

  return (
    <div>
      <Quiz data = {dummyData}/>
    </div>
  )
}

export default App;
