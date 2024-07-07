import React, { Component } from 'react'
import HomePage from './home'
import LoginPage from './login'

export default class Index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggin : false
      }
    }

    
  render() {
    const {isLoggin} = this.state;
    let element = isLoggin? <HomePage /> : <LoginPage /> ;
    return (
      <div>
        {element}
      </div>
    )
  }
}
