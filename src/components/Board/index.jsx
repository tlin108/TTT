import React, { Component } from 'react';
import './Board.css';

import Square from '../Square';

class Board extends Component {
  renderSquare(i) {
    const squares = this.props.squares;
    return <Square key={i} value={squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  renderRow(rowNum) {
    const rowStartValue = rowNum * 3;
    let row = []
    for (let j=rowStartValue; j<rowStartValue+3; j++){
      row.push(this.renderSquare(j));
    };
    return row;
  }

  renderBoard() {
    let board = [];
    for (let i=0; i<3; i++){
      board.push(
        <div className="board-row" key={i}>
          {this.renderRow(i)}
        </div>
      );
    };
    return board;
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}

export default Board;