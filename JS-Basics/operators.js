//  Operators in javascript

var age = 26;
var now = 2017
var birthYear = now - age;

birthYear = now - age  * 2;

console.log('John was born in ' + birthYear);


// assignment comes from right to left
// so ageJohn receives first the value and then equation
var equation = ageJohn = (3 + 5) * 4 - 6;

console.log(equation);

console.log('John age is ' + ageJohn);

// same thing - '++' increments before execution 
console.log('John age is ' + ++ageJohn);

// increments after execution - Uses the older value
console.log('John age is ' + ageJohn++);