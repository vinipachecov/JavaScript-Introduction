


var Person5 = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function (){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athelete5 = function(name, yearOfBirth, job, olympicGames, medals){
    // our super class
    Person5.call(this, name, yearOfBirth, job);

    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMedal = function (){    
    this.medals++;
    console.log(this.medals);
}

var johnAthelete5 = new Athelete5('John',1990,'swimmer', 3, 10);

johnAthelete5.calculateAge();
johnAthelete5.wonMedal();


// ES6

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
    
}

const john6 = new Person6('John6', 1990, 'designer');

class Athelete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals){
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthelete6 = new Athelete6('JOhn', 1990, 'swimmer', 3, 10);

johnAthelete6.calculateAge();
johnAthelete6.wonMedal();
