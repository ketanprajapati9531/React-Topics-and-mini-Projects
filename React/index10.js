import React from 'react';
import ReactDOM from  'react-dom';

const name= "ketan prajapati";
ReactDOM.render(
    <>
    <h1>my name is {name}.</h1>
    <p>Study in AIET College</p>
    <p>random number {Math.random()}</p>
    </>
    ,document.getElementById('root')

);

// In {} only Expression run. 
// statement(if else) not run in {}.