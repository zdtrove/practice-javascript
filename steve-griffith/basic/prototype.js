// [ toString, valueOf, isPrototypeOf, hasOwnProperty,...]
// obj ==> obj.protytype (Object prototype) ==> null
// Object Prototypes in JavaScript

let obj1 = {
    prop1: () => console.log('prop11')
};

let obj2 = {
    prop2: () => console.log('prop22')
}

Object.setPrototypeOf(obj2, obj1);

// obj2.prop2();
// obj2.prop1();
// obj2.toString();

// for (let prop in obj2) {
//     console.log(prop);
// }

// Object.getPrototypeOf(obj2).prop1();
// console.log(Object.getPrototypeOf(obj2));
// console.log(Object.getOwnPropertyNames(obj2));
// console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj1)));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj2)));