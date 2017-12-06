

// classes
// in ES5  you used function constructors that the objects inherit their methods

// ES5

var Person5 = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function (){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}


var john5 = new Person5('JOhn',1990, 'teacher');

class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;        
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log(`'Hey there! I'm a static method! :))`);
    }
}

const john6 = new Person6('John6', 1990, 'designer');

Person6.greeting();