const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

// console.log(source);
// expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// expected output: Object { a: 1, b: 4, c: 5 }

let obj1 = { a: { d: 0}, b: { c: 0 } };
let obj2 = Object.assign({}, obj1);
// console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

// obj1.a = 1;
// console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
// console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

// obj2.a = 2;
// console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
// console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

console.log(obj1);
console.log(obj2);
console.log('************************')
obj2.a.d = 3;
console.log(obj1);
console.log(obj2);