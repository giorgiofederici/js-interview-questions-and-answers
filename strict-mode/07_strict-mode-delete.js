'use script';

var myVar = 1;
delete myVar; // Not allowed in strict mode

function myFunction() {}
delete myFunction; // Not allowed in strict mode

function myFunctionWithArgs(arg) {
    delete arg; // Not allowed in strict mode
}

