/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

// getting a html id and setting text to it
// document.querySelector('#current-' + activePlayer).textContent = dice;

// //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// // reading value
// var x = document.querySelector('#score-0').textContent;



// event handler - Dice roll
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // generate random number
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + diceNumber + '.png';


        // update the round score if the rolled number was not a 1
        if (diceNumber !== 1) {
            //add to score
            roundScore += diceNumber;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //zero the score
            changePlayer();


        }
    }
});

function changePlayer() {
    roundScore = 0;
    // remove active from the curret player
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    // next player        
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // change the active player
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    // set dice invisible again
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add the current value to the current
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        // check if the player won the game
        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            changePlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    if (activePlayer == undefined) {
        activePlayer = 0;
    } else {
        if (activePlayer === 1) {
            // set player 0 again
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
        }
        // set player name correctly
        document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
        document.querySelector('.player-0-panel').classList.add('active');
    }

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    // start with no dice
    document.querySelector('.dice').style.display = 'none';


    //get element by id
    //  setup scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // remove winner class    
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
}