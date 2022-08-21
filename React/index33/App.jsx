//handling events
import React, { useState } from 'react';

const App = () =>{
    const purple = "yellow";
    const [bg , setBg] = useState(purple);
    const [name,setName] = useState('Click Me');

    const bgChange = () =>{
         //console.log("clicked"); 
         let newBg = '#34495e';
         setBg(newBg);
         setName("Boom!")
    };
    const bgBack = () =>{
       
        setBg(purple);
        setName("wow!")
   };



    return(
       <>
        <div style={ { backgroundColor : bg } }>
            <button onClick={bgChange} onDoubleClick={bgBack} >{name}</button>
        </div>
       </>
    );

};
export default App;


//click
//double click