


//  USING Objects

var john = {
    name: 'John',
    lastname: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried:false
};

console.log(john);

console.log("Last name is (dot notation) " + john.lastname);

console.log("Acessing last name by parenthesis " + john['lastname']);


var xyz = 'job';
console.log(john[xyz]);

//changing john last name

john.lastname = 'Miller';
john['job'] = 'programmer'; 

console.log(john);

var jane = new Object();

// fill it with inserting values

jane.name = 'Jane';
jane.lastname = 'Smith';
jane['yearOfBirth'] = 1969;
jane.job = 'retired';
jane['isMarried'] = true;

console.log(jane);