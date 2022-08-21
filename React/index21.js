import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mul,div} from './Calc';

ReactDOM.render(
        <>
            <ul>
                <li>Sum of two number is {   add(40,4) }  </li>
                <li>Sub of two number is {   sub(40,4) }  </li>
                <li>mul of two number is {   mul(40,4) }  </li>
                <li>div of two number is {   div(40,4) }  </li>
            </ul>
        </>,document.getElementById("root")
);
