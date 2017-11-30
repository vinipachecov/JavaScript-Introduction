
///////////////////////////////////////
// Lecture: The this keyword

//default object
// console.log(this);

calculateAge(1985);

function calculateAge(year){
    console.log(2016 -year);
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge : function(){
        console.log(this);
        console.log( 2016 - this.yearOfBirth);

        // function innerF(){
        //     // here we have the window object in the 'this';
        //     console.log(this);
        // }
        // innerF();
    }
}

john.calculateAge();

var mike = {
    name : 'Mike',
    yearOfBirth : 1984    
}

// borrowing the method
mike.calculateAge = john.calculateAge;
mike.calculateAge();