import React, {useState} from 'react';

import MouseOvercount from './Mouseovercount';

function ClickCount (){
	const [count, setcount]= useState(0);

	return(

        <div>
         <button onClick={()=>setcount((count)=>count+1)}>Increment </button>
         <p>Count:{count}</p>
         <MouseOvercount />
        </div>



		);
}

export default ClickCount;