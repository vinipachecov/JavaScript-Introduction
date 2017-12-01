// lecture of clojures

function retirement(retirmentAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirmentAge - age) + a );
    }   
}

var retirementUS = retirement(66);




retirementGermany = retirement(65);

retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

console.log('invoking with all parameters 66 and 1990');
retirement(66)(1990);


// rewriting the interview function from returning functions.js

function interviewQuestion(job){
    return function(name){
        if (job === 'designer'){
            onsole.log(name + ', can you please explain what ux design is?');
        } else if (job === 'teacher') {        
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello' + name + 'What do you do?');
        }
    }     
}

// the first return is the function
// second parameter is the call of the returned function with parameter john - it still can access job parameter

interviewQuestion('teacher')('John');