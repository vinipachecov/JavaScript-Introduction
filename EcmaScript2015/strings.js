//  Strings in ES6

let firstName = 'John';
let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5

console.log('This is ' + firstName + ' ' + lastName + ', born in ' + yearOfBirth  +
    '. Today he is ' + calcAge(yearOfBirth));


// ES6
// now we can use ` for strings and use ${} for calling variables to our string.
console.log(`This is ${firstName} ${lastName}, born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;

// checking substrings inside a string to see if there is an occurence of that substring inside our variable
// startswith - check if string start with a input string
// endswith - check if string ends with a input string
// includes - check if a string is inside the variable called
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
// repeating a string
console.log(n.repeat(5));

