import React from 'react';
import ReactDOM from  'react-dom';


const fname= "ketan";
const lname= "prajapati";

//console.log(`my name is ${fname} `)
ReactDOM.render(
//using template literal

    <>
    <h1> {`my name is ${fname} ${lname} `}</h1> 
    <p>Study in AIET College</p>
    <p>random number {Math.random()}</p>
    </>
    ,document.getElementById('root')

    );



    /*   <>
    <h1>my name is {fname} {lname} </h1> 
    <p>Study in AIET College</p>
    <p>random number {Math.random()}</p>
    </>
    ,document.getElementById('root')
*/  

/*

<>
<h1>my name is {fname + " " + lname} </h1> 
<p>Study in AIET College</p>
<p>random number {Math.random()}</p>
</>
,document.getElementById('root')


*/


