// Array forEach loop

let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin', 'Dwalin', 'Nori', 'Dori']

// convert all the names to lowercase except Thorin
// and console.log them
// anonymous function

dwarves.forEach(function(item, index, array) {
	if (item === 'Thorin') {
		item = item.toUpperCase()
	} else {
		item = item.toLowerCase()
	}
	console.log(index, item)
})

console.log(dwarves)