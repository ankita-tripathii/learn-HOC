import React, {useState} from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {

  function NewComponent(props) {
   
   //First, we created a Hook variable called counter and set its initial value to 10
   const [counter, setCounter]= useState(10);

  //render OriginalComponent and pass on its props.
    return (
      <OriginalComponent 
      name="HOC" 
      counter={counter}//export our counter Hook
      // //now create an 'incrementCounter' function
       incrementCounter={() => setCounter((counter) => counter + increaseCount)}
       {...props}
      />
  );
  }
  return NewComponent;
};
export default UpdatedComponent;