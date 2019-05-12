// Pass by reference

'use strict';

// Outer scope
var a = {
    enabled: 'yes'
};

function myFunction(a) {
    // Function scope  or inner scope
    // When passing by reference, we can not change what a is pointing to
    // We can only change a property or add a property
    a = {
        yes: 'enabled'
    };
}

myFunction(a);

console.log(a); // -> { enabled: 'yes' }