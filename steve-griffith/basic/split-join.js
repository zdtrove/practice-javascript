// String split and Array join methods
// converting Strings to Arrays and Arrays to Strings
// String to Array   str.split()
// Array to String   arr.join()

let log = console.log

let sentence = 'Hello my name is Inigo Montoya'

let words = sentence.split(' ').sort()
log(words)

// let chars = sentence.split('name')
// log(chars)

// chars = sentence.split('')
// log(chars)


let hyphenated = words.join('-')
log(hyphenated)

let oneWord = words.join('')
log(oneWord)

let x = sentence.split(' ').sort().join(' ')
log(x)