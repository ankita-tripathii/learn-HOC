import React, {useState} from 'react';

import UpdatedComponent from './withcounter';

function HoverIncrease(props){
	const [fontSize, setfontSize] = useState(10);
    const { counter, incrementCounter } = props; 

	return(
     <>
     <div>
     <button onMouseOver={()=>setfontSize((size)=> size+1)}>Increase font size Hover</button>
     <p style={{fontSize}}> My font size is increase: {fontSize}</p>
     </div>

     <div>
     <p>Value of 'Name' is HoverIncrease: {props.name}</p>
     <p>value of 'secretWord' is HoverIncrease: {props.secretWord}</p>
     </div>

     <div>
      <button onMouseOver={() => incrementCounter()}>Increment counter Hover</button> 
      <p> Value of 'counter' in HoverIncrease: {counter}</p>
     </div>
     </>

		);
}


export default UpdatedComponent(HoverIncrease, 5);