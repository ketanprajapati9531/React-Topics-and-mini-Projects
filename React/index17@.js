import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// new Date(year,month,day,hours,minute)
let curDate= new Date(2022,8,15,20);
curDate = curDate.getHours();
let greeting = '';
const cssStyle = { };

if(curDate >= 1 && curDate < 12){
   greeting = 'Good morning';
   cssStyle.color = 'green';

}else if(curDate>=12 && curDate < 19){
    
    greeting = "Good afternoon";
    cssStyle.color = 'Orange';
}
else{
  
    greeting = "Good night";
  cssStyle.color = 'black';
}



ReactDOM.render(
    <>
  <div>
  <h1> 
  hello, <span style = {cssStyle} > {greeting} </span>
  </h1>
  </div>
  </> ,
  document.getElementById("root")
);