// function constructor

// traditional way we were using objects
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

// function constructors starts with capital letters
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function(){
    //     console.log(2016 - this.yearOfBirth);
    // }
}

Person.prototype.calculateAge = function () {
        console.log(this.name + ' ' + this.lastName + ' has '  + (2016 - this.yearOfBirth) + ' years old.');
    }

// check that i can still access a property not added, but adding it in the prototype,
// accessable in the function above
Person.prototype.lastName = 'Smith';

// 
var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1980, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

