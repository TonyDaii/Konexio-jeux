var behind = -100;
var move = 100;

var players = [
  {
    id: 'red',
    keyId: 'key-1',
    key: 39,
    keyLabel: '&#8594;'
  },
  {
    id: 'yellow',
    keyId: 'key-2',
    key: 68,
    keyLabel: '"d"'
  },
  {
    id :'red',
    keyId: 'key-3',
    key : 37,
    keyLabel: "&#8592;",
  },
  {
    id: 'yellow',
    keyId: 'key-4',
    key: 81,
    keyLabel: '"q"'
  },

];

var winnersList = [];

var winner = null;
var running = null;

function reset() {
  var winnersString = "";
  for (var i=0; i<winnersList.length ; i++) {
    winnersString = winnersString + "Partie " + (i + 1) + ": " + winnersList[i] + " ";
  }
  alert(winnersString);

  document.getElementById('landing-page').style.display = 'flex';
  document.getElementById('game-page').style.display = 'none';

  var redCoyote = document.getElementById('red');
  var yellowCoyote = document.getElementById('yellow');

  redCoyote.style.left = 0;
  yellowCoyote.style.left = 0;

  winner = null;
}

function go() {
  
  document.getElementById('landing-page').style.display = 'none';

  document.getElementById('game-page').style.display = 'flex';

  document.getElementById('bipbip').className = 'animation';

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    document.getElementById(player.keyId).innerHTML = player.keyLabel;
  }
}

document.addEventListener('keydown', onKeyDown);

function onKeyDown(event) {

var redCoyote = document.getElementById('red');
var yellowCoyote = document.getElementById('yellow');

  var beforeLeftRed = window.getComputedStyle(redCoyote).getPropertyValue("left");
  var beforeLeftYellow = window.getComputedStyle(yellowCoyote).getPropertyValue("left");

  var leftRed = Number.parseInt(beforeLeftRed, 10);
  var leftYellow = Number.parseInt(beforeLeftYellow, 10);

  if (event.keyCode === players[0].key) {
    leftRed += move;
    redCoyote.style.left = leftRed + "px";
  }

  if(event.keyCode === players[2].key) {
    leftRed += behind;
    redCoyote.style.left = leftRed + "px";
  }

  if (event.keyCode === players[1].key) {
    leftYellow += move;
    yellowCoyote.style.left = leftYellow + "px";
  }

  if (event.keyCode === players[3].key) {
    leftYellow += behind;
    yellowCoyote.style.left = leftYellow + "px";
  }

  if (leftRed > window.innerWidth && winner === null) {
    alert('Coyote rouge gagne !');
    winner = 'rouge';
    winnersList.push('rouge');
  } else if (leftYellow > window.innerWidth && winner === null) {
    alert('Coyote jaune gagne !');
    winner = 'jaune';
    winnersList.push('jaune');
  } else if (leftRed > window.innerWidth && winner !== null && winner !== 'rouge') {
    reset();
    alert('Coyote rouge perd !');
  } else if (leftYellow > window.innerWidth && winner !== null && winner !== 'jaune') {
    reset();
    alert('Coyote jaune perd !');
  } 

}
