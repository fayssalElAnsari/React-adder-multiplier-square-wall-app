import React, { Component } from 'react'
import Sum from './Sum.jsx'

import '../assets/style/gauche.css'
import Product from './Product.jsx'

export class Gauche extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             plus: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( prevState => ({plus: !prevState.plus}))
    }
    

    render() {

        const operatorComponent = this.state.plus ? <Sum {...this.props} /> : <Product {...this.props} />

        return (
            <div>
                <button
                    onClick={this.handleClick}>
                    {this.state.plus? 'X' : '+'}
                </button>
                
                {operatorComponent}
            </div>
        )
    }
}

export default Gauche
