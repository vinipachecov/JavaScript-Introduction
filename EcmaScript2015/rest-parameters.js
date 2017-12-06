

// Lecture Rest parameters

// ES5

function isFullAge() {
    // console.log(arguments);

    var argsArray = Array.prototype.slice(arguments);

    argsArray.forEach(function(cur){
        console.log((2017 - cur) >= 18); 
    })
}

// isFullAge(1990, 1999, 1965);
// isFullAge(1990,1999,1965,2016,1987);

// ES6

function isFullAge6(...years){
    // here years is an array

    years.forEach(element =>
         console.log((2016 - element) >= 18 )       
    );
}

//isFullAge6(1990,1999,1965,2016,1987);


// part 2



function isFullAge5(limit) {
    // console.log(arguments);

    var argsArray = Array.prototype.slice.call(arguments,1);

    console.log(argsArray);

    argsArray.forEach(function(cur){
        console.log((2017 - cur) >= limit); 
    })
}

// isFullAge(1990, 1999, 1965);
// isFullAge(1990,1999,1965,2016,1987);

// ES6

function isFullAge6(limit, ...years){
    // here years is an array

    years.forEach(element =>
         console.log((2016 - element) >= limit )       
    );
}

isFullAge6(16,1990,1999,1965,2016,1987);

