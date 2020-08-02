// all about strings

var str1 = new String('Toy Story')
var str2 = String('Wall-e')
var str3 = 'Cars'

var result = str1.toUpperCase()
var result2 = 'Monsters Inc'.toLowerCase()

console.log(str1, result)
console.log(result2)

var r = str2.substring(4, 5)
console.log(r)

var r2 = str2.substr(4, 1)
console.log(r2)

var r3 = str2.indexOf('-')
console.log(r3)

var r4 = ''.concat('o')
console.log(r4)