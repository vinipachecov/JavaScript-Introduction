// objects and methods


// first "version"
// var john = {
//     name: 'John',
//     lastname: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried:false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function(){
//         return 2017 - this.yearOfBirth;
//     }
// };


// console.log(john.family[2]);

// console.log(john.calculateAge());

// var age = john.calculateAge();

// john.age = age;

// console.log(john);
//calculateAge is a function expression!!
// would be the same of doing this

// var calculateAge = function(yearOfBirth){

// }


// version 2.0

var john = {
    name: 'John',
    lastname: 'Smith',
    yearOfBirth: 1990,    
    job: 'teacher',
    isMarried:false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);





