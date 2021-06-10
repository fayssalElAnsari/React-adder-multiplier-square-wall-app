import { PropTypes } from 'prop-types';
import React, { Component } from 'react'
import Square from './Square.jsx'

export class Droite extends Component {
    render() {

        const squares = this.props.squares.map(square =>
             
                <Square 
                {...square}
                handleSquareValueChange={this.props.handleSquareValueChange}
                key={square.color}
            />
            
        )

        const optionSquare = this.props.optionSquare ? <Square color='black' value={0}/> : null;

        return (
            <div>
                {squares}
                {optionSquare}
            </div>
        )
    }

    static propTypes =
    {
        optionSquare : PropTypes.bool
    }
}

export default Droite
