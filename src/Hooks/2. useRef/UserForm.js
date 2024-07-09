import React,{useRef} from'react'

//usRef can directly access DOM elements, uncontrolled component

const UserForm = () => {
const userNameRef = useRef();
const passwordRef = useRef();

const handleSubmit = (event) =>{
    event.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    userNameRef.current.style.color = 'green';
    console.log({userName, password});
}
  return (
    <div>
       <form  onSubmit={handleSubmit}>
        <div>
            <label htmlFor="userName">UserName: </label>
            <input type="text" id="userName" ref={userNameRef} autoComplete="off"/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" ref={passwordRef} autoComplete="off"/>
        </div>
        <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default UserForm
