import React ,{useState} from 'react'
import style from './faq.module.css'

const Faq = (props) => {
  const [toggle, setToggle] = useState(false);
  const {id, ques, ans} = props.faq;
  const handleToggle =() =>{
    setToggle(!toggle);
  }
  return (
    <article className={style.faq}>
        <div onClick={handleToggle}>
            <h4>{ques}</h4>
            <button className={style.toggleIcon}>
                {toggle ? '-' : '+'}
            </button>
        </div>
        <div className={style.ans}>

            {toggle && <p>{ans}</p>}
        </div>
    
    </article>
  )
}

export default Faq
