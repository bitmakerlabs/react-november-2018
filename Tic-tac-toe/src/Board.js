import React, { Component } from 'react';

class Square extends Component {

  render() {
    const { value, onClick } = this.props;
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
}



class Board extends React.Component {

  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
    endGame: false
  }


  handleOnClick = (i) => {
    const { xIsNext } = this.state;
    const squares = this.state.squares.slice();

    if( calcuteWinner(squares || squares[i]) ){
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      endGame: calcuteWinner(squares) ? true : false,
      squares: squares,
      xIsNext: !xIsNext,
    })
  }

  renderSquare(i) {
    return (
      <Square
        onClick={() => this.handleOnClick(i)}
        value={this.state.squares[i]}
      />
    );
  }

  handleResetBoard = () =>  {
    this.setState({
      squares: Array(9).fill(null),
    })
  }

  showReset = () => {
      return (<button onClick={this.handleResetBoard}>  Reset </button>)
  }


  render() {
    const {xIsNext, endGame} = this.state;
    const nextPlayer = xIsNext ? 'X' : 'O'
    const status =`Next Player ${nextPlayer}`
    const checkWinner = calcuteWinner(this.state.squares)
    let winner;
    if(checkWinner) {
      winner = 'Winner' + checkWinner;
    } else {
      winner = status;
    }

    return (
      <div className="board">
        <div className="status">{winner}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {endGame ?  this.showReset() : null}
      </div>
    );
  }
}

export default Board;


const calcuteWinner = (squares) =>  {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6]
  ];

  for(let i = 0; i < lines.length; i ++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return[squares[a]]
    }
  }

  return null;
}
