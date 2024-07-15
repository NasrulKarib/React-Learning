import React from 'react';
import Card from './Components/Card'
import Data from './data.json'
import Card2 from './Components/card2'
import StateClass from './Components/stateClass'
import StateFunction from './Components/stateFunction'
import IndexCond from './conditional_rendering/Index'
import IndexEvent from './Event_handler/index'
import RegForm from './registraion_form/regForm'
import Home from './todo/home'
import Form from './formik & Yup/form'
import Toggle from './toggle/toggle'
import FAQ from './FAQ/home'
import UseEffectExample from './Hooks/1 .useEffect/useEffectExample';
import DataFetch from './Hooks/1 .useEffect/DataFetch';
import UserForm from './Hooks/2. useRef/UserForm';
import Reducer from './Hooks/3. useReducer/useReducer'
import Context from './Hooks/4. useContext/Home'

// To load components
export default function App() {
  return (
    <>
      {/*  1. <h1 className='heading'>First React App</h1>
       {Data.map((item, index)=> 
        
       <Card key={index} titleTxt={item.title} despTxt={item.desp}/>)
       }
       <Card2 desp = 'First program on class based component' /> */}
       {/* 2. <StateClass count = '0'/> */}
      {/* 3. <IndexCond /> */}
      {/* 4. <IndexEvent /> */}
      {/* 5. <StateFunction /> */}
       {/* <RegForm /> */}
      {/* 7. <Home /> */}
      {/* < Form /> */}
      {/* 9. <Toggle /> */}
      {/* 10. <FAQ /> */}
      {/* 11.<UseEffectExample /> */}
      {/* 12. <DataFetch /> */}
      {/* 13. <UserForm /> */}
      {/* 14. <Reducer /> */}
      <Context />
   
    </>
  );
}




