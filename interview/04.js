Object.prototype.objCustom = function () { };
Array.prototype.arrCustom = function () { };

let a = [3, 5, 7];
a.x = 'hello';

Object.defineProperty(a, 'y', {});
Object.defineProperty(a, 'z', {
    enumerable: true
});

for (let i of a) {
    console.log(i);
}