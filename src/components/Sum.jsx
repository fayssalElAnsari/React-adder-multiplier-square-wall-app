import React, { Component } from 'react'

export class Sum extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
 
        const sum = this.props.squares.reduce ((acc,square) => acc+square.value, 0);

        return (
            <div className="result">
                La somme des valeurs est <span className="value">{sum}</span>
            </div>
        )
    }
}

export default Sum
