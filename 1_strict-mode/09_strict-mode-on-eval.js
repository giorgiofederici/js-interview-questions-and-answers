'use strict';

var eval = 10; // Strict mode -> Not allowed

var myVar = 2;
eval('var myVar = 1');

// Strict mode -> myVar is equal to 2
// Any variables that you define inside the eval code only exists within the eval code and don’t leak out.

