// objects
var dog = {name: 'woody', type: 'dog'};
var cat = {name: 'bob', type: 'cat'};
console.log(dog);

var petNames = ['woody', 'bob'];
console.log(petNames);
var pets = [dog, cat];
console.log(pets);

pets.push({name: 'roxy', type: 'dog'});
console.log(pets[2]);

cat.age = 2;
dog['age'] = 14;
console.log(pets);