import React,{useState} from 'react'
import { UserContext } from './userContext'
import Component2 from './component2';

const Component1 = () => {
  const [user, setUser] = useState({id : 115, name : 'Arian'});  
  const [message, setMessage] = useState('First time context hook message')
  return (
    <UserContext.Provider value = {{user, message}}>
        <Component2/>
    </UserContext.Provider>
  )
}

export default Component1
