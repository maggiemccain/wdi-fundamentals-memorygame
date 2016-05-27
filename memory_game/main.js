var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
/*if (cardOne === cardTwo) {
  alert('You found a match!');
} else  if (cardThree === cardFour) {
  alert('You found a match!');
} else {
  alert('Sorry, try again');
}*/
var board = document.getElementsByClassName('board')[0]; 
for (x = 0; x < 4; x += 1); {
	var cardElement = document.createElement('div');
cardElement.className = 'card';
board.appendChild(cardElement);
}
var createBoard = function(x) {
  return board;
}