// Pass by value

'use strict';

// Outer scope
var a = 1;

function myFunction(a) {
    // Function scope  or inner scope
    a = 2;
}

foo(a);

console.log(a); // -> 1