import React,{useState} from 'react'
import { UserContext } from './Context/Context'
import Users from './Users'

const Home = () => {
  const data = [
      {
          id:1,
          name: 'Arian',
      },
      {
          id : 2,
          name : 'Nahian',
      }
  ] 
  const [users,setUsers] = useState(data);
  return (
    <UserContext.Provider value = {{users, setUsers}}>
        <Users/>
    </UserContext.Provider>
  )
}

export default Home
