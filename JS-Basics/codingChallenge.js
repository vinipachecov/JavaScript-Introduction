var heightJohn = 172;
var heightMike = 165;

var ageJohn = 26;
var ageMike = 29;

//calculate score

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

if ( scoreJohn > scoreMike){
    console.log('JOhn wins the game with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) { 
    console.log('Mike wins the game with ' + scoreMike + 'points');
} else {
    console.log("There is a draw");
}

console.log("Second round!");
console.log("Mary comes in!");

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('JOhn wins the game with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary ){
    console.log('Mike wins the game with ' + scoreMike + ' points');
}
else if (scoreMary > scoreJohn && scoreMary > scoreMike ){
    console.log('Mary wins the game with ' + scoreMary + ' points');
}else {
    console.log("Its a draw");
}

console.log('great playing!');