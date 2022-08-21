import React from 'react';
import ReactDOM from 'react-dom';

const name = "ketan";
const img1 = "https://picsum.photos/id/237/200/300";
const img2 = "https://picsum.photos/id/237/250/300";
const img3 = "https://picsum.photos/id/237/300/300";
const links = "https://github.com/ketanprajapati9531";

ReactDOM.render(
   <>
   <h1 contentEditable="true">My name is {name} </h1>
   <img src={img1} alt="random images" /> 
   <img src={img2} alt="random images" />

   <a href={links} target="_blank">
   <img src={img3} alt="random images" /> 
   </a>

   </>,
   document.getElementById('root')
   
);

//jsx attribute