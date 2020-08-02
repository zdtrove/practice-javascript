// hoisting
// the process of taking two passes through the js file_exists
// first pass hoists all the declarations to the top of the file

var a
var b = 4
console.log(d) // undefined
c()

function c() {
	// function declaration
	console.log('func declaration')
}
var d = 5

console.log(e) // undefined
var e = function() {
	// function expression
	console.log('function expression')
}
e() // this work