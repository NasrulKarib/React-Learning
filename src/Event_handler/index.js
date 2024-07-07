import React, { Component } from 'react'

class index extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      para : ''
   }
 }
 
 
 handleOnChange = (e) =>{
    this.setState({
        para : e.target.value
    })
 }  
  render() {
    return (
      <div>
        <input type='text' onChange = {this.handleOnChange} ></input>
        <h3>{this.state.para}</h3>
      </div>
    )
  }
}

export default index