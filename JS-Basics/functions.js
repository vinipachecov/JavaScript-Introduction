

function calculateAge(yearofBirth) {
    var age = 2017 - yearofBirth;    
    return age;
}

// function inside a function
console.log("John is " + calculateAge(1992));


var ageJohn = calculateAge(1992);


function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(retirement);
}

yearsUntilRetirement('John', 1995);