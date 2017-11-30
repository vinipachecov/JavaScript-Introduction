



function printFullAge(years) {

    var ages = [];
    var fullAges = [];


    years.forEach(element => {
        ages.push(2016 - element);
    });

    ages.forEach(element => {
        if (element >= 18) {
            console.log('Person ' + (ages.indexOf(element) + 1) + ' is ' + element +
                ' years old, and is of full age;');
                fullAges.push(true);
        } else {
            console.log('Person ' + (ages.indexOf(element) + 1) + ' is ' + element +
                ' years old, and is not full age;');
                fullAges.push(false);
        }
    });

    return fullAges;
}

var years = [2001, 1982, 1994, 2014, 1973];
var years2 = [1965, 1975, 1993, 2002, 1998];

var full_1 = printFullAge(years);
var full_2 = printFullAge(years2);


