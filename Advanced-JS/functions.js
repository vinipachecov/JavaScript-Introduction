// functions as arguments

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

console.log('Result without storing in a variable = ' + arrayCalc(years, calculateAge));

var ages = arrayCalc(years, calculateAge);
console.log('Stored in ages values = ' + ages);


function isFullAge(element) {
    return element >= 18;
}

console.log('Result without storing in a variable = ' + arrayCalc(years, isFullAge));

var fullages = arrayCalc(years, isFullAge);

console.log('Stored in fullages values = ' + fullages);


function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

console.log('Result without storing in a variable = ' + arrayCalc(years, maxHeartRate));

var maxheartrate = arrayCalc(ages, maxHeartRate);

console.log('Stored in maxheartrate values = ' + maxheartrate);

