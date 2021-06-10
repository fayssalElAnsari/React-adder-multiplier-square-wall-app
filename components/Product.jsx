import React, { Component } from 'react'

export class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {

        const product = this.props.squares.reduce ((acc,square) => acc*square.value, 1);

        return (
            <div className="result">
                Le produit des valeurs est <span className="value">{product}</span>
            </div>
        )
    }
}

export default Product
