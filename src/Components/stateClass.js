import React, { Component } from 'react'

export default class state extends Component {
  constructor(props) {
    super(props);
    // Without calling super(props), the this keyword in the constructor would not be properly initialized, leading to an error.
    this.state = {
       count : 0
    }
    // Binding in the Constructor - as handleDecrement is normal function, binding in the constructor is mandatory
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  // Using Arrow Function in Class, there is no need to explicitly bind
  handleIncrement = () =>{
      this.setState(
        {
            count : this.state.count + 1
        }
      )
  }
  handleDecrement(){
      this.setState(
        {
            count : this.state.count - 1
        }
      )
  }
  render() {
    const {count} = this.state;
    return (
      <div className='stateCount'>
        <h1>Count : {count}</h1>
        <button className='incrementbtn'onClick={this.handleIncrement}>+</button>
        <button className='decrementbtn' onClick={this.handleDecrement} disabled={count === 0 ? true : false}>-</button>
      </div>
    )
  }
}
