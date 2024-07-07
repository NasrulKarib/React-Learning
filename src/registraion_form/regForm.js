import React ,{useState}from 'react';
import style from './formStyle.module.css';


export default function RegForm() {
    const [user, setUser]= useState({name:'',email:'',password:''})
    const {name, email, password} = user;
    const handleChange =(e) =>{
        const fieldName = e.target.name;
        setUser({...user,[fieldName]:e.target.value})
    }
    const handleSubmit =(e) =>{
        console.log('Form is submitted');
        console.log(user);
        e.preventDefault();
    }
  return (
    <div className={style['form-container']}>
      <form className={style["registration-form"]} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className= {style["form-group"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={style["submit-button"]}>Submit</button>
      </form>
    </div>
  )
}
