
var p1symb = 'X';
var p2symb = 'O';

var currentTurn = p1symb;

var board = document.querySelector('.board');
board.addEventListener('click', function(e) {
    e.target.innerHTML = currentTurn;
    currentTurn = currentTurn === p1symb ? p2symb : p1symb;
});