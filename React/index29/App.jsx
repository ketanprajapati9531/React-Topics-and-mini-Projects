import React from 'react';

const SlotM = (props) => {

    let x= props.x;
    let y= props.y;
    let z= props.z;

  if((x === y) && (y === z)){
    return(
        <>
            <div className='slot_inner'>
            <h1>{x} {y} {z}</h1>
            <h1>This is matching</h1>
            <hr />
            </div>
        </>
    );
  }else{
    return(
        <>
            <div className='slot_inner'>
            <h1>{x} {y} {z}</h1>
            <h1>This is not matching</h1>
            <hr />
            </div>
        </>
    );
  }
}
const App = () =>{
  return(
    <>
     <h1 className='heading_style'> 
     Welcome to 
     <span style= {{ fontWeight: 'bold' }}> Slot Machine game</span> 
     </h1>

     <SlotM x="😀" y="😀" z="😀"/>
     <SlotM x="👋" y="👌" z="⚖️"/>
     <SlotM x="⚖️" y="👋" z="👌"/>
     <SlotM x="👋" y="👋" z="👋"/>
    </>
  );
};
export default App;