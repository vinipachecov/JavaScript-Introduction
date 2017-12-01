//  bind call and apply 


var john = {
    name:'John',
    age:26, 
    job:'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlement!' +
            ' I\'m '  +  this.name +
            ', I\'m a ' + this.job 
            + ', and I\'m ' + this.age + ' years old.');
        } else if ( style ===  'friendly'){
            console.log(
                'Hey! What\'s up?' 
                +
                ' I\'m'  +  this.name +
                ', I\'m a ' + this.job 
                + ', and I\'m ' + this.age + ' years old.'
                + 'Have a nice ' + timeOfDay
            );
        }
    
    }
}


var  emily = {
    name:'Emily',
    age:35,
    job:'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// Apply
// this won't work since it's not expecting an array
// john.presentation.apply(emily, ['formal', 'afternoon'])

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night')

var emilyFormal =
john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

// lets do some calculations with this array

function arrayCalc(array, fn) {
    var result = [];
    array.forEach(element => {
        result.push(fn(element));
    });
    return result;
}

// our singletask functions

function calculateAge(element) {
    return 2016 - element;
}

function isFullAge(limit, element) {
    return element >= limit;
}


var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20));


console.log('Ages = ' + ages);

console.log(fullJapan);