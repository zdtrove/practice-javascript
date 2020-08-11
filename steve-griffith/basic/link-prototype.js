/**
 * linking prototype objects to build a prototype chain
 * __proto__ vs Object.getPrototypeOf(obj) & Object.setPrototypeOf(obj)
 */

// 1. obj --> otherProto.prototype --> Object.prototype --> null
let otherProto = function() {
    this.prop1 = 456; // this means the instance of the object we are creating
    this.inner = function() {
        console.log('inner method on instance');
    };
    // automatically returns the instance of the object
};

otherProto.prototype.someMethod = function() {
    console.log('this is otherProto');
};

let obj = new otherProto();
// console.log(obj.prop1); // 456
// obj.inner();
// obj.someMethod();
// obj.toString();
// obj.__proto__.inner(); // fail
// Object.getPrototypeOf(obj).inner(); // fail
// Object.getPrototypeOf(obj).someMethod(); // yes

// 2.
let protoObj = {
    prop1: 456,
    someMethod: function() {
        console.log('this is someMethod');
    }
}; // let protoObj = new Object(); protoObj.prop1 = 456; protoObj.someMethod = function(){}

// Object.getPrototypeOf(protoObj).otherMethod = function() {}
// protoObj.prototype.otherMethod = function() { // fail
protoObj.__proto__.otherMethod = function() {
    console.log('this is otherMethod');
};

// 3. childObj --> protoObj --> Object.prototype --> null
let childObj = {};
Object.setPrototypeOf(childObj, protoObj);
// console.log(childObj.prop1);
// childObj.someMethod();
// childObj.otherMethod();
// childObj.nonmethod(); // fail

// 4. childObj2 --> protoObj --> Object.prototype --> null
let childObj2 = Object.create(protoObj);
console.log(childObj2.prop1); // 456 coming from protoObj
childObj2.prop1 = 777; // created a new property inside childObj2 called prop1
console.log(childObj2.prop1, childObj2.__proto__.prop1);
childObj2.someMethod(); // calls the one inside protoObj
childObj2.someMethod = function() {
    console.log('new method inside childObj2');
}
childObj2.someMethod();
childObj2.__proto__.someMethod();