

//  for loops

// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

var names = ['john', 'Arya', 'Jena', 'Mike', 'Rob','Peter'];
names.forEach(element => {
    console.log(element);
});

//  can do the same way

console.log('Printing with normal for loop');
for (var i = 0; i < names.length; i++) {
     console.log(names[i]);
    
}

// going reversse
console.log('Printing reverse order!');
for (var i = names.length - 1; i >= 0 ; i--) {
    console.log(names[i]);
    
}

// while loops!

var i = 0;
console.log("here comes the while loop!");
while( i < names.length){
    console.log(names[i]);
    i++;
}


console.log("printing numbers to 0 to 2 breaking on 3");
for (var i = 0; i <= 5; i++){    
    if( i === 3 ){
        break;
    }
    console.log(i);
}

console.log("printing numbers to 0 to 2 continuing from 4 to 5");
for (var i = 0; i <= 5; i++){    
    if( i === 3 ){
        continue;
    }
    console.log(i);
}