import React, { Component } from 'react'

import '../assets/style/square.css'

export class Square extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            
        }
    }


    handleClick() {
        this.props.handleSquareValueChange(this.props.color)
    }

    render() {
        return (
            <div className="square" 
                style = {{ backgroundColor : this.props.color}}
                
                onClick={this.handleClick}>
                
                {this.props.value}
            </div>  
        )
    }
}

export default Square
