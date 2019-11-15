// function map(f, a) {
//     var result = []; // Create a new Array
//     var i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
//   }
//   var f = function(x) {
//      return x * x * x; 
//   }
//   var numbers = [0, 1, 2, 5, 10];
//   var cube = map(f,numbers);
//   console.log(cube);

// console.log(square); // square is hoisted with an initial value undefined.

// var square = function(n) { 
//   return n * n; 
// }

// console.log(square(5)); // Uncaught TypeError: square is not a function

// function factorial(n) {
//     if ((n === 0) || (n === 1))
//         return 1;
//     else
//         return (n * factorial(n - 1));
// }

// console.log(factorial(5));

// The following variables are defined in the global scope
// var num1 = 20,
//     num2 = 3,
//     name = 'Chamahk';

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // Returns 60

// // A nested function example
// function getScore() {
//   var num1 = 2,
//       num2 = 3;
  
//   function add() {
//     return name + ' scored ' + (num1 + num2);
//   }
  
//   return add();
// }

// console.log(getScore()); // Returns "Chamahk scored 5"

// console.log(num1);

// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }
// fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
//                         // it
// console.log(fn_inside);
// result = fn_inside(5); // returns 8
// console.log(result);

// result1 = outside(3)(5); // returns 8
// console.log(result1);
// four variables are created and assigned in a single go, 
// separated by commas
// var a = 3;
// var b = 4;
// var c = 2;

// console.log(Math.pow(2, b));
// console.log(a*Math.pow(2, b));

// JS Lookahead assertion x(?=y)

// let regex = /First(?= test)/g;

// console.log('First test'.match(regex)); // [ 'First' ]
// console.log('First peach'.match(regex)); // null
// console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
// console.log('This is a First peach in a month.'.match(regex)); // null
// let log = console.log;
// let a3 = 100;
// setTimeout(function() { a3++; log('000') }, 0);
// log(a3);
// setTimeout( function() { log(a3) }, 0);

// let p = new Promise(function(resolve, reject) {
//     setTimeout( function() {
//         resolve('Yee');
//     }, 0);
// });
// log(p);

// setTimeout( function() {
//     log(p);
// }, 3000);

// user = {
//     firstname: 'firstname',
//     lastname: 'lastname',
//     showName: function () {
//         console.log(this.firstname + ' ' + this.lastname);
//     }
// }

// khoa = {
//     fistname: 'Khoa',
//     lastname: 'Nguyen'
// }

// khoa.__proto__ = user;
// khoa.showName();

// var text = 'outside';
// function show() {
//     console.log(text);
//     var text = 'inside';
// }
// show();

function b() {
    var text = 'xxx';
    console.log(text);
}

function a() {
    var text = "in a";
    b();
}

var text = 'in global';
a();