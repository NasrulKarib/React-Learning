import React, { useState , useEffect} from 'react'

const useEffectExample = () => {
  const [count, setCount]= useState(0);
  const handleClick =() =>{
    setCount(count => count + 1);
  }
  useEffect(() =>{
    console.log('UseEffect');
  },[count])
  
  return (
    <div>
        {console.log('Rendering')}
      <h1>Count : {count}</h1>
      <button onClick = {handleClick}>+ </button>
    </div>
  )
}

export default useEffectExample
