import React from 'react';
import ReactDOM from 'react-dom';
import youtuber,{ favprog , myName , myNames } from './Tech';
//OR
//import * as ques from "./Tech";

ReactDOM.render(
   <>
    <ol>
        <li> ketan </li>
        <li> {youtuber} </li>
        <li> {favprog}</li>
        <li> {myName()}</li>
        <li>{myName()}</li>
    </ol>
   </>,document.getElementById("root")
);