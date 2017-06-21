
var gameState = {
    p1symb: 'X',
    p2symb: 'O',
    currenTurn: 'X',
    board: [
       "", "", "", "", "", "", "", "", "" 
    ]
};

var render = function(state) {
    return "<div class='board'>" +
    "<div class='square'>" + state.board[0] + "</div>" +
    "<div class='square'>" + state.board[1] + "</div>" +
    "<div class='square'>" + state.board[2] + "</div>" +
    "<div class='square'>" + state.board[3] + "</div>" +
    "<div class='square'>" + state.board[4] + "</div>" +
    "<div class='square'>" + state.board[5] + "</div>" +
    "<div class='square'>" + state.board[6] + "</div>" +
    "<div class='square'>" + state.board[7] + "</div>" +
    "<div class='square'>" + state.board[8] + "</div>" +
    "</div>"
};
document.querySelector('.container').innerHTML = render(gameState);
// var board = document.querySelector('.board');
// board.addEventListener('click', function(e) {
//     e.target.innerText = currentTurn;
//     currentTurn = currentTurn === p1symb ? p2symb : p1symb;
//     if (checkWinner()) {
//         alert("SOMEBODY WON!");
//     };
// });

// function checkWinner() {
//     var squares = Array.prototype.slice.call(document.querySelectorAll('.square'), 0);
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