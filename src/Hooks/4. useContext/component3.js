import React,{useContext} from 'react'
import { UserContext } from './userContext'

const Component3 = () => {
  const {user, message} = useContext(UserContext); // access data from component1 directly without props drilling(passing through props)
  const {id, name} = user;
  return (
    <div>
        <h3>{id}</h3>
        <p>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default Component3
