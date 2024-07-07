import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './form.module.css'

const Form = () => {
  const formik = //to handle form state easily
  useFormik({
    initialValues : {
        name : '',
        email : '',
        password : ''
    },
    validationSchema : // 3rd party library Yup for schema validation
    Yup.object({
        name : Yup.string().min(5, 'Must be atlest 3 characters').required('Required'),
        email : Yup.string().email('Invalid Email').required('Required'),
        password : Yup.string().min(5,'Must be atleast 5 characters long').required('Required'),
    }),
    onSubmit : (values, {resetForm}) =>{
        console.log(values);
        resetForm({values : ""});
    }
  })  
  return (
    <div class = {style['form-container']}>
      <form onSubmit = {formik.handleSubmit}>
        <div>
            <label for="name">Name:</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            value={formik.values.name}
            onChange = {formik.handleChange}
            required />
            {
            formik.touched.name && formik.errors.name &&
            (<div style={{color: "red"}} >{formik.errors.name}</div>)
            }
        </div>
        <div>
            <label for="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            value = {formik.values.email}
            onChange = {formik.handleChange}
            required />
            {
            formik.touched.email && formik.errors.email &&
            (<div style={{color: "red"}} >{formik.errors.email}</div>)
            }
        </div>
        <div>
            <label for="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            value={formik.values.password} 
            onChange = {formik.handleChange}
            required />
            {
            formik.touched.password && formik.errors.password &&
            (<div style={{color: "red"}} >{formik.errors.password}</div>)
            }
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Form;
