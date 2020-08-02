// variable scope
"use strict"
// create some global variables

var ranger = 'aragorn'
let elf = 'legolas'
const dwarf = 'gimli'
let hobbit = 'sam'

function goToMountDoom() {
	for (var i = 0; i < 100; i++) {
		// i is a local scope variable
	}
	for (let c = 0; c < 100; c++) {
		// c is a block scope variable
	}
	console.log('i', i)
	//console.log('c', c) // error
	let hobbit = 'frodo'
	console.log(hobbit)
}

function visitLothLorien() {
	elf = 'galadriel'
	ranger = 'strider'
	//dwarf = 'gloin' // error
	let hobbit = 'bilbo'
}

console.log(hobbit)

goToMountDoom()
visitLothLorien()