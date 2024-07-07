import React,{Component} from 'react';

class Card2 extends Component {
    render() // return JSX to be renderer
    {
        return (
            <div>
                <h2>{this.props.desp}</h2>
            </div>
        )
    }
} 
export default Card2;