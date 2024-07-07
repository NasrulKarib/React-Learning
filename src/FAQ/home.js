import React, {useState}from 'react';
import {data} from './data'
import FAQ from './faq';
import style from './faqs.module.css'

const Home = () => {
  const [faq, setData] = useState(data);
  return (
  <main className={style.container}>
    <section className={style.faqs}>
        <h1>Frequently Asked Question</h1>
        {
            faq.map( item => <FAQ key ={item.id} faq = {item}/>)
        }
    </section>
  </main>

  )
}

export default Home
