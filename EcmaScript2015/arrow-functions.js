//  arrow functions

const years = [1990, 1965, 1982, 1937];


// ES5

var ages = years.map(function (element) {
    return 2017 - element;
})

console.log(ages);

// ES6

let ages6 = years.map(element => 2017 - element);

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}:${age}.`
});

console.log(ages6);

// Part 2 with arrow functions


// ES
// var box5 = {
//     color:'green',
//     position:1,
//     clickMe: function() {
//         var self = this;

//         document.querySelector('.green')
//         .addEventListener('click', function(){
//             var str = 'This is box number ' + self.position +
//             ' and it is ' + self.color;
//             alert(str);
//         })
//     }
// }

// box5.clickMe();

// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;

        document.querySelector('.green')
            .addEventListener('click', () => {
                var str = 'This is box number ' + this.position +
                    ' and it is ' + this.color;
                alert(str);
            })
    }
}
box6.clickMe();

// will become undefined!
// const box7 = {
//     color:'green',
//     position:1,
//     clickMe: () => {        

//         document.querySelector('.green')
//         .addEventListener('click', () => {
//             var str = 'This is box number ' + this.position +
//             ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// }
// box7.clickMe();

// 


function Person(name) {
    this.name = name;
}

// ES5

Person.prototype.myFriends5 =
    function (friends) {

        // we could use the self trick
        // but we can use bind and apply also
        var arr = friends.map(function (element) {
            return this.name + ' is friends with ' + element;
        }.bind(this));
        console.log(arr);
    }

var friends = ['Bob', 'Jane', 'Mark'];
new Person('JOhn').myFriends5(friends);


// ES6 version


Person.prototype.myFriends6 =
function (friends) {

    // we could use the self trick
    // but we can use bind and apply also
    var arr = friends.map(element => 
        `${this.name} is friends with ${element}`
    );
    console.log(arr);
}

new Person('Mike').myFriends6(friends);