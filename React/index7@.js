//how to use multiple jsx elements inside render method using array?

import React from 'React';
import ReactDOM from 'react-dom';

//example of array        const arr= ['ketan','prajapati','AIET']
//In react new versions it's possbile for render()
//to return an array of element.
ReactDOM.render( 
            [
                <h1> hello world! </h1> ,
                <p>pls follow my insta page ketanprajapati9531</p> ,
                <h2>follow github my acconut</h2>
            ],
                document.getElementById('root')
             );