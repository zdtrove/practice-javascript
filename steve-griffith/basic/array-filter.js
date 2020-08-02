// Array filter() method

let numbers = [23, 45, 14, 66, 94, 33, 4, 9]
let breakPoint = 30;

let smallNumbers = numbers.filter(function(num) {
	return num < breakPoint;
})

let bigNumbers = numbers.filter(num => num > breakPoint)

let oddNumbers = numbers.filter(num => num % 2 === 0)

let eventNumbers = numbers.filter(checkEven)

function checkEven(num) {
	return num % 2 !== 0
}

let log = console.log
log('\n Smaller than 30:', smallNumbers)
log('\n Larger than 30:', bigNumbers)
log('\n Odd numbers:', oddNumbers)
log('\n Even numbers:', eventNumbers)