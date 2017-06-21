
var p1symb = 'X';
var p2symb = 'O';

var currentTurn = p1symb;

var board = document.querySelector('.board');
board.addEventListener('click', function(e) {
    e.target.innerText = currentTurn;
    currentTurn = currentTurn === p1symb ? p2symb : p1symb;
    if (checkWinner()) {
        alert("SOMEBODY WON!");
    };
});

function checkWinner() {
    var squares = Array.prototype.slice.call(document.querySelectorAll('.square'), 0);
    var symbols = squares.map(function(s) {
        return s.innerText;
    });
    var winningComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        return winningComb.find(function(comb) {
                    if (symbols[comb[0]] == symbols[comb[1]] && symbols[comb[1]] == symbols[comb[2]]) {
                        return symbols[comb[0]];
                    } else {
                    return false; 
                    }
                });
};