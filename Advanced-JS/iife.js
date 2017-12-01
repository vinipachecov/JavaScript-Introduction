// About IIFE 

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

console.log('Invoking it immediately: ');
(function() {
    var score = Math.random() * 10;
    console.log('Works the same way! Result of random ->' + score >= 5);
})();


// if you try to log the score variable outside the function scope it will not work
// with this you can isolate the variable. Remember about data privacy!
(function(goodluck){
    var score = Math.random() * 10;
    console.log('Result of goodluck = ' + score >= 5 - goodluck)
})(5);