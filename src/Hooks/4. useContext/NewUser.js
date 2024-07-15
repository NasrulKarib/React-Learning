import React, { useState,useContext } from 'react'
import { UserContext } from './Context/Context';
import style from './context.module.css'
const NewUser = () => {
  const {setUsers} = useContext(UserContext);
  const [newUser,setNewUser] = useState('');

  const handleSubmit =(event) =>{
    event.preventDefault();
    const user = {id: new Date().getTime().toString(), name:newUser};
    setUsers(prevValue =>{
      return [...prevValue, user];
    })
    setNewUser('');
  }
  return (
    <div className={style.newUser}>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder='Add User'
        value = {newUser}
        onChange={(e) => setNewUser(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default NewUser
