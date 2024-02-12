import React, {useState} from 'react';

import UpdatedComponent from './withcounter';

function ClickIncrease(props){
	const [fontSize, setfontSize] = useState(10);
	const { counter, incrementCounter } = props; 

	return(
     <>
     <div>
     <button onClick={()=>setfontSize((size)=> size+1)}>Increase font size Click</button>
     <p style={{fontSize}}> My font size is increase: {fontSize}</p>
     </div>

     <div>
     <p>Value of 'name' in ClickIncrease: {props.name}</p>
     </div>

     <div>
    <button onClick={() => incrementCounter()}>Increment counter Click</button> 
    <p> Value of 'counter' in ClickIncrease: {counter}</p>
     </div>
     </>

		);
}


export default UpdatedComponent(ClickIncrease, 10);