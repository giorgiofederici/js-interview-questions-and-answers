// Pass by reference

'use strict';

// Outer scope
var a = {};

function myFunction(a) {
    // Function scope  or inner scope
    a.enabled = false;
}

myFunction(a);

console.log(a); // -> { enabled: false }