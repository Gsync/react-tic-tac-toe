import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p1sym: "X",
            p2sym: "O",
            currentTurn: "X",
            board: [
                "", "", "", "", "", "", "", "", "" 
            ]
        }
    }

    handleClick(index) {
        this.state.board[index] = this.state.currentTurn
        this.setState({
            board: this.state.board,
            currentTurn: this.state.currentTurn == this.state.p1sym ? this.state.p2sym : this.state.p1sym
        })
    }

    render() {
        return (
            <div className="board">
                {this.state.board.map((cell, index) => {
                    return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>
                })}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));



// var gameState = {
//     p1symb: 'X',
//     p2symb: 'O',
//     currentTurn: 'X',
    // board: [
    //    "", "", "", "", "", "", "", "", "" 
    // ]
// };

// var render = function(state) {
//     document.querySelector(".container").innerHTML = "<div class='board'>" +
//     "<div class='square' data-square-id='0'>" + state.board[0] + "</div>" +
//     "<div class='square' data-square-id='1'>" + state.board[2] + "</div>" +
//     "<div class='square' data-square-id='2'>" + state.board[3] + "</div>" +
//     "<div class='square' data-square-id='3'>" + state.board[1] + "</div>" +
//     "<div class='square' data-square-id='4'>" + state.board[4] + "</div>" +
//     "<div class='square' data-square-id='5'>" + state.board[5] + "</div>" +
//     "<div class='square' data-square-id='6'>" + state.board[6] + "</div>" +
//     "<div class='square' data-square-id='7'>" + state.board[7] + "</div>" +
//     "<div class='square' data-square-id='8'>" + state.board[8] + "</div>" +
//     "</div>"
// };
// render(gameState);
// var board = document.querySelector('.board');
// board.addEventListener('click', function(e) {
//     var squareIndex = parseInt(e.target.dataset['squareId'], 10);
//     gameState.board[squareIndex] = gameState.currentTurn
//     gameState.currentTurn = gameState.currentTurn === gameState.p1symb ? gameState.p2symb : gameState.p1symb;
   
//    render(gameState);
   
// });

// function checkWinner() {
//     var squares = gameState.board;
//     var symbols = squares.map(function(s) {
//         return s.innerText;
//     });
//     var winningComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//         return winningComb.find(function(comb) {
//                     if (symbols[comb[0]] == symbols[comb[1]] && symbols[comb[1]] == symbols[comb[2]]) {
//                         return symbols[comb[0]];
//                     } else {
//                     return false; 
//                     }
//                 });
// };