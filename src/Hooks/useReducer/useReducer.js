import React,{useState,useReducer, act} from 'react'
import {reducer} from './reducer'
import {v4 as uuidv4} from 'uuid'
import style from './reducer.module.css'

const initialState = {
  books : "",
  isAdded : false,
  message : "",
}
const UseReducer = () => {
  const [bookName, setBookName] = useState("")
  const [bookState, dispatch] = useReducer(reducer, initialState) //Uses the reducer function to manage the app state based on actions.
  const [color, setColor] = useState(false);

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const newBook = {id:uuidv4(), name : bookName};
    dispatch({type : "ADD", payload : newBook});// dispatches the ADD action to the reducer
    setColor(true);
    setBookName("");
  }
  
  const removeId = (id) =>{
    dispatch({type:"REMOVE", payload : id}); //dispatches the REMOVE action with the id of the book to be removed.
    setColor(false);
  }
  return (
    <div className= {style.reducer}>
      <h1 className={style.heading}>Books List</h1>
      <form className={style.form}onSubmit ={handleSubmit}>
        <input 
        className= {style.text}
        type='text' 
        value = {bookName}
        placeholder="Add a book's name"
        onChange = {(e) => setBookName(e.target.value)
        }/>
        <button className={style.btn} type='submit'>Add</button>
      </form>
      {bookState.isAdded && (color ? <p style = {{color:'green'}}>{bookState.message}</p> : <p style = {{color:'red'}}>{bookState.message}</p>)}
      {
        //console.log(bookState.books)
        
        bookState.books && bookState.books.map((book) =>  
        {
          const {id,name} = book;
          return (
             <li className={style.list} key = {id}>{name}
              <button onClick={() => {removeId(id)}}> Remove</button>
             </li>
            )
         
        }
      )
      }
    </div>
  )
}

export default UseReducer
