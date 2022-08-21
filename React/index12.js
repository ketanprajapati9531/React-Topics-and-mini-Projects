import React from 'react';
import ReactDOM from 'react-dom';

const name="ketan";
const date = new Date().toLocalDateString(); //for Date
const time= new Date().toLocalTimeString();  //for Time

ReactDOM.render(
   <>
    <h1>Hello, I am {name}</h1>
    <p>today date is ${date}</p>
    <p>current time is ${time}</p>
   </>,
   document.getElementById('root')
);
