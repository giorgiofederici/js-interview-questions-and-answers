// Pass by value

'use strict';

// Outer scope
var a = true;

function myFunction(a) {
    // Function scope  or inner scope
    a = false;
}

myFunction(a);

console.log(a); // -> true