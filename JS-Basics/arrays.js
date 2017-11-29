var names = ['John', 'Victor', 'Jane', 'Robsbawn'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');

//also inserts but in the beginning 
john.unshift('Mr.');

//removes the last element
john.pop();

// removes first element
john.shift();

alert("Index of smith = " + john.indexOf('Smith'));

console.log(john);

// indexOf returns -1 when it doesn't found the element
if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
} else {
    console.log('John is  a teacher')
}