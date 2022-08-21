import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// new Date(year,month,day,hours,minute)
let curDate= new Date(2022,8,15,14);
curDate = curDate.getHours();
let greeting = '';

if(curDate >= 1 && curDate < 12){
   greeting = 'Good morning';
}else if(curDate>=12 && curDate < 19){
    greeting = "Good afternoon";
}else{
  greeting = "Good night";
}



ReactDOM.render(
  <h1> hello, {greeting} </h1>
  ,
  document.getElementById("root")
);