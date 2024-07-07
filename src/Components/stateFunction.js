import React, { useState } from 'react';

export default function StateFunction() {
  // In functional components, the useState hook is used to manage state.
  const [count, setCount] = useState(0);
 
  const handleParent = (event) =>{
    console.log(event);
  }
  const handleIncrement =(event) =>{
    event.stopPropagation(); // when you want to handle the event only in the innermost element without triggering the event handlers of parent elements.
    console.log(event);
    setCount(count => count+1); // count => count+1 is used to update the prev value of count
  }
  const handleDecrement =() =>{
    setCount(count => count-1);
  }
  return (
    <div className='stateCount' onClick={handleParent}> 
        <h1>Count : {count}</h1>
        <button className='incrementbtn'onClick={handleIncrement}>+</button>
        <button className='decrementbtn' onClick={handleDecrement} disabled={count === 0 ? true : false}>-</button>
    </div>
  )
}
