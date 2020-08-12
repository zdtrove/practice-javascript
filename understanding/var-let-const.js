// var : function-scoped or globally-scoped

// **********************************************

// var x = 1;
// if (x === 1) {
// 	var x = 2;
// 	console.log(x); // 2
// }
// console.log(x); // 2

// **********************************************

// 'use strict';
// function foo() {
//     var x = 1;
//     function bar() {
//         var y = 2;
//         console.log(x); // 1 (function `bar` closes over `x`)
//         console.log(y); // 2 (`y` is in scope)
//     }
//     bar();
//     console.log(x); // 1 (`x` is in scope)
//     console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
// }
// foo();

// **********************************************

// 'use strict';
// console.log(x);                // undefined (note: not ReferenceError)
// console.log('still going...'); // still going...
// var x = 1;
// console.log(x);                // 1
// console.log('still going...'); // still going...

// **********************************************

// 'use strict';
// var x = 1;
// globalThis.hasOwnProperty('x'); // true
// delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
// delete x;  // SyntaxError in strict mode. Fails silently otherwise.

// **********************************************

// // var have function scope
// var x = function() {
//     var y = 1;

//     console.log(y);
// }
// // console.log(y); // ReferenceError: y is not defined
// x();

// **********************************************

// // var not have block scope
// var x = function() {
//     if (true) {
//         var y = 1;
//     }

//     if (true) {
//         var y = 3;
//     }

//     console.log(y);
// }

// x();

// **********************************************

// // lexical scope
// var x = function() {
//     var y = 1;
//     var z = function() {
//         console.log(y);
//     }
//     z();
// }
// x();

// **********************************************

// // hoisting
// var y = 2;
// var x = function() {
//     // var y;
//     // y = 1;
//     console.log(y);
//     // var y = 1;
// }
// x();

// **********************************************

// // let have block scope
// let x = function() {
//     if (true) {
//         console.log(y); // error
//         let y = 1;
//         console.log(y); // 1
//     }
//     console.log(y); // error
// }
// console.log(y); // error
// x();

// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************
// **********************************************