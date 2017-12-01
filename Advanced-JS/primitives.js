//  primitives vs Objects


var a = 23;

var b = a;

// b is also equal to 23

a = 46;

console.log('A is ' + a);
console.log('B is ' + b);

var obj1 = {
    name :'John',
    age:26
};

var obj2 = obj1;

obj1.age = 30;

console.log('Obj1 age = ' + obj1.age);
console.log('Obj2 age = ' + obj2.age);

// functinos

var age = 27;
var obj = {
    name:'Jonas',
    city:'Lisbon'
};

function change(a,b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age,obj);

console.log('Age of obj ' + age);
console.log('CIty of obj = ' + obj.city);