// blocks and IIFEs


{
    const a = 1;
    let b = 2;    
    var c= 3;
}

console.log(c);

// console.log(a + b);

// ES5
(function(){
    var c = 5;
})();

// raise an error because of data encapsulation
// console.log(c);