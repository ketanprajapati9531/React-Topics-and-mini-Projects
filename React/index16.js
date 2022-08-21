import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Go to index.css

const name = "ketan";
const field = "IT";
const img1 = "https://picsum.photos/id/237/200/300";
const img2 = "https://picsum.photos/id/237/250/300";
const img3 = "https://picsum.photos/id/237/300/300";
const links = "https://github.com/ketanprajapati9531";

//create object for inline css....
//In inline css property write in camelCase form....
const heading = {
    color : '#fa9191',
    textTransform : 'capitalize',
    textAlign : 'center',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px #ffe9c5',
    margin:     '70px 0'
};


ReactDOM.render(
   <>
   <h1 style= { { color : '#fa9191', textTransform : 'capitalize', textAlign : 'center'} }>
               My name is {name} </h1>  
   
   <h1 style = {heading}>Field is {field}</h1>

   <div className="img_div">
   <img src={img1} alt="random images" /> 
   <img src={img2} alt="random images" />
   <a href={links} target="_blank">
   <img src={img3} alt="random images" /> 
   </a>
   </div>

   </>,
   document.getElementById('root')
   
);

