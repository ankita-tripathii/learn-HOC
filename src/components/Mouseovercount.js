import React,{useState} from 'react';


function MouseOvercount(){
	const [count, setcount]=useState(0);

	 return(
     <div>
     <button onMouseOver={()=> setcount((count)=> count+1)}>Increment</button>
     <p>count:{count}</p>
     </div>
	 	);
}

export default MouseOvercount;