import React, { useContext } from 'react'
import {UserContext} from './Context/Context'
import User from './user'
import style from './context.module.css'
import NewUser from './NewUser'


const Users = () => {
  
  const {users}= useContext(UserContext);

  return (
        <div className={style.users} >
            <NewUser/>
            {
                users.map(user =>
                    <User key={users.id} user={user} />
                )
            }
        </div>
  )
}

export default Users
