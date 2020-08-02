// Array reduce method
// reduce all the values in an array into a single result
// Uses a callback function just like map, forEach, filter, etc
// array.reduce(callback, initialValue)
// also has a second parameter which is an initialValue

let numbers = [12, 34, 56, 78, 91]
// find the sum of all the numbers

let movies = ['Start Wars', 'Star Trek', 'Jaws', 'Jurassis Park', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind', 'Good Will Hunting', 'Layer Cake', 'Casino Royale', 'Almost Famous']
// find the first movie alphabetically

let log = console.log
// let sum = numbers.reduce((passedIn, item) => passedIn + item, 5)
let sum = numbers.reduce((passedIn, item) => {
	console.log(passedIn, item)
	return passedIn + item
}, 5)
log('Total is', sum, '\n')

let first = movies.reduce(function(current, item) {
	console.log('comparing', current, 'to', item)
	return(current < item) ? current : item
})
log('First movie is', first)