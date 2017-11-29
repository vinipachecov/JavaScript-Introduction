// Control statements

var name = 'John';
var age = 26;
var isMarried = 'no';

// check if the variable isMarried has a specific value
if(isMarried === 'yes'){
    console.log(name + ' is married');
} else {
    // if not...
    console.log(name + 'will hopefully marry soon :)');
}

isMarried = true;

if(isMarried) {
    console.log('John is married! :O');
}

if( 23 == "23"){
    console.log(" Yes 23 is == to '23' Something to print...\n" + "This is called typecoersion" );
}

if( 23 === "23"){
    
}else{
    console.log(" Noe 23 is not === to '23' Something to print...\n" + "=== does not use typecoersion" );
}


// using Switch

var age = 16;

if (age == 16 && 16==16){
    console.log('Yes this is correct');
}

if(age == 16 || 10==12){
    console.log('10 is not == 12 but age is == 16');
} else {
    
}


job = 'teacher';

job = prompt("set john job!");

switch(job){
    case 'teacher':
        console.log("John is a teacher!");
        break;
    case 'driver':
        console.log("John is a driver!");
        break;
    default:
        console.log("John does something else!");

}