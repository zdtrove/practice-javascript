// let characters = ['a', 'b', 'c', 'd'];
// console.log(characters);
// console.log(characters.length);
// console.log(characters[characters.length-1]);

// characters.push('e');
// characters.push('f');
// console.log(characters);

// characters.pop();
// characters.pop();
// console.log(characters);

// characters.unshift('abc');
// characters.unshift('def');
// console.log(characters);

// var rem = characters.shift();
// console.log(rem);
// characters.shift();
// console.log(characters);

/**********************************************************/

/***
 * 0 - a
 * 1 - b
 * 2 - c
 * 3 - d
 */

var characters = ['a', 'b', 'c', 'd'];
console.log(characters);

characters.splice(0, 1, 'e');
console.log(characters);

characters.splice(1, 2, 'f');
console.log(characters);

characters.splice(1, 1, 'g', 'h');
console.log(characters);

characters.splice(1, 2);
console.log(characters);

characters.push('bbb');
characters.push('ccc');
console.log(characters);

characters.reverse();
console.log(characters);

characters.sort();
console.log(characters);

var position = characters.indexOf('fff');
console.log(position);

var position = characters.indexOf('ccc');
console.log(position);

var position = characters.indexOf('d');
console.log(position);

characters.push('d');

var position = characters.lastIndexOf('d');
console.log(position);


