///////////////////////////////////////
// Lecture: Hoisting


// functions
// we can execute a declared function and use it wherever we need.
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
}

// not only after it's declaration
calculateAge(1990);


// now let's write a function expression

// calling the function before it is declared
// retirement(1990);


var retirement = function(year){
    console.log(65 - (2016 - year));
}

retirement(1990);


// variables

//  try to use a variable before we declare it
console.log('Age is = ' + age);
// we get undefined!

var age = 23;

console.log('Age is = ' + age);


function foo(){
    console.log('Age is = ' + age);
    var age = 65;
    console.log('Age is = ' + age);
}
foo();
console.log('Age is = ' + age);