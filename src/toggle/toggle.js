import React,{useState} from 'react'

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  //alert(toggle);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div style ={{margin:'1rem', backgroundColor : 'pink' ,padding : '1rem'}}>
       {toggle && (
           <p>Lorem accusam voluptua erat dolores takimata erat sit erat tempor nonumy, sit clita sed nonumy tempor eos no. Sit amet nonumy et lorem magna sit et diam. Diam sea eos et eirmod no sit lorem. Sanctus rebum lorem magna eirmod.</p>
       )} 
       
      <div style = {{textAlign : 'center'}}>
        <button onClick = {handleToggle }>
            {toggle? ('Hide'): ('Show')}
        </button>

      </div>
    </div>
  )
}

export default Toggle;
