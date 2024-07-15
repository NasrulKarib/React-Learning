import React,{useContext} from 'react'
import { UserContext } from './Context/Context';
import style from './context.module.css'

const User = ({user}) => {
  const {users,setUsers}= useContext(UserContext);
  const {id, name} = user;

  const handleDlt = (id) =>{
    setUsers(users.filter(user => user.id !== id));
  }
  return (
    <div className={style.user}>
      <h2>{name}</h2>
      <button onClick={() => {handleDlt(id)}}> Delete</button>
    </div>
  )
}

export default User
