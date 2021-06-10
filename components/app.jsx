import React from 'react';

import '../assets/style/app.css';
import Droite from './Droite.jsx';
import Gauche from './Gauche.jsx';

/*
 define root component
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       squares : []
    };

    this.handleSquareValueChange = this.handleSquareValueChange.bind(this);
  }

  initSquares(){
    return [ {color: 'red', value:0},
            { color: 'blue', value:0},
            {color: 'green', value:0}
  ]
  }

  componentDidMount(){
    setTimeout(  () => this.setState( {
      squares : this.initSquares()
    }), 2500)
  }

  handleSquareValueChange(color){
    const copySquares = [...this.state.squares];
    const updatedSquare = copySquares.find( square => square.color === color);
    updatedSquare.value = updatedSquare.value +1;
    this.setState({squares : copySquares});
  }
  

  render() {
    return(
        <div className="app">
           <Gauche
              squares = {this.state.squares}
           />
           <Droite 
              squares={this.state.squares}
              handleSquareValueChange={this.handleSquareValueChange}
              optionSquare = {true}
           />
        </div>
    );
  }

}

