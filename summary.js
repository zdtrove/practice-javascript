/* ----------------- [Lexical Scoping] ----------------- */

// var a = 1;
// (function() {
//      console.log(a); // Can access a
//     (function() {
//         console.log(a); // Can access a
//         (function() {
//             console.log(a); // Can access a
//         })();
//     })();
// })();

// // console.log(b); // Can't access b
// (function() {
//     var b = 1;
//    (function() {
//        console.log(b); // Can access b
//        (function() {
//            console.log(b); // Can access b
//        })();
//    })();
// })();
// // console.log(b); // Can't access b

// // To avoid c become global, using "use strict"
// // "use strict";
// (function() {
//     (function() {
//         (function() {
//             c = 1; // c become global
//         })();
//     })();
// })();
// console.log(c); // If use "use strict" c can't not access. If not, c can access as global variable

// var x = function() {
//     var y = 1;
//     var z = function() {
//         console.log(y); // can access y
//     }
//     z();
// }
// x();

/* ----------------- [Block Scope] ----------------- */

// "use strict";
// (function() {
//     var i = 1;
//     if (true) {
//         var i = 2; // same variable
//         // let i = 2; // same variable
//         console.log(i); // 2
//     }
//     console.log(i); // 2
//     // console.log(i); // 1 - if using let keyword
// })();

// var x = function() {
//     if (true) {
//         var y = 1;
//     }
//     console.log(y); // 1 - var doesn't respect the blocks boundary, it only respects function boundaries
// }
// x();

// // Using let
// let x = function() {
//     if (true) {
//         // console.log(y); // cause error: cannot access y before initialization
//         let y = 1;
//     }
//     // console.log(y); // cause error when using let instead var: y is not defined
// }
// x();

/* ----------------- [Constants] ----------------- */

// "use strict";
// const a = 2;
// // a = 3; // cause error
// console.log(a);

// Object.defineProperty(window, 'PI', {
//     value: 3.14,
//     writable: false
// });
// PI = 2; // problem is it not cause error
// console.log(PI);

// const PI = 3.14;
// PI = 2; // it cause error when using const keyword
// console.log(PI);

/* ----------------- [Function scope] ----------------- */

// var x = function() {
//     var y = 1;
// }
// // console.log(y); // cause error
// x();

/* ----------------- [Hoisting] ----------------- */

// var x = function() {
//     console.log(y); // undefined
//     console.log(z); // cause error: z is not defined
//     var y = 1;
// }
// x();

// var x = function() {
//     var y;
//     y = 1;
//     // var y = 1; the same above
//     console.log(y);
// }
// x();

// var y = 2;
// var x = function() {
//     console.log(y); // undefined
//     var y = 1;
// }
// x();