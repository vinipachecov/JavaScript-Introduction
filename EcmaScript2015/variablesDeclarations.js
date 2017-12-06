// new ways of declaring variables

// ES5

var name5 = 'Jane Smith';
var age = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
// will raise an error by trying to change a value of a constant
// console.log(name6);

// ES5 

function driversLicense(passedTest) {
    if (passedTest) {
        // (3)
        console.log(firstName);


        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ' is now' +
        'officialy allowed to drive a car');
    // ES5 is based on function scopes, and then we can use those varibles above.
    // before defining we have undefined in es5
}

driversLicense(true);

// ES6



function driversLicense6(passedTest) {

    // (3)
    console.log(firstName);

    // (2)    
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest) {
        // 1
        // let firstName = 'John';
        // const yearOfBirth = 1990;        
    }
    // (1) will not work because ES6 deal variables by block scopes.
    // Because of this we don't have access to firstName or YearOfBirth variables
    // (3) will not work, this will raise an error.


    console.log(firstName + ', born in ' + yearOfBirth + ' is now ' +
        'officialy allowed to drive a car');
}

driversLicense6(true);


// ES5
var i = 23;

for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);

// ends with 5


// ES6
let i = 23;

for(let i = 0; i < 5; i++){
    console.log(i);
}

// ends with 23 because inside the for variable is local to it.
console.log(i);