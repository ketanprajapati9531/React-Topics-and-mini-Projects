import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Go to index.css

const name = "ketan";
const img1 = "https://picsum.photos/id/237/200/300";
const img2 = "https://picsum.photos/id/237/250/300";
const img3 = "https://picsum.photos/id/237/300/300";
const links = "https://github.com/ketanprajapati9531";

ReactDOM.render(
   <>
   <h1 className ="heading">My name is {name} </h1>  
   

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

//index.css heading class.....
//class is already reserved keyword so now you use 'className'.