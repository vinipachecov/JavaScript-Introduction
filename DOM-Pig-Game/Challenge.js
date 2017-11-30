var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();


// event handler - Dice roll
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // generate random number
        var diceNumber1 = Math.floor(Math.random() * 6) + 1;
        var diceNumber2 = Math.floor(Math.random() * 6) + 1;

        // display the result        
        document.getElementById('dice-1').style.display ='block';
        document.getElementById('dice-2').style.display ='block';
        // 
        document.getElementById('dice-1'.src) = 'dice-' + diceNumber1 + '.png';
        document.getElementById('dice-2'.src) = 'dice-' + diceNumber2 + '.png';
        

        // update the round score if the rolled number was not a 1
        if (diceNumber1 !== 1 && diceNumber2 !==1) {
            //add to score            
            roundScore += diceNumber1 + diceNumber2;            
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //zero the score
            changePlayer();
        }

        // CHALLENGE 2 
        // // update the round score if the rolled number was not a 1
        // if (diceNumber === 6 && lastDice === 6) {
        //     // player loses score
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     changePlayer();
        // } else if (diceNumber !== 1) {
        //     //add to score
        //     roundScore += diceNumber;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // } else {
        //     //zero the score
        //     changePlayer();
        // }

        // lastDice = diceNumber;
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

    document.getElementById('dice-1').style.display ='none';
    document.getElementById('dice-2').style.display ='none';
}

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add the current value to the current
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // personal final score for winning
        var input = document.querySelector('.final-score').value;
        var winningScore;
        // check for undefined, null or 0 or "" are coerced to false

        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        console.log(input);

        // check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display ='none';
            document.getElementById('dice-2').style.display ='none';
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
    document.getElementById('dice-1').style.display ='none';
    document.getElementById('dice-2').style.display ='none';

    //get element by id
    //  setup scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // remove winner class    
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
}