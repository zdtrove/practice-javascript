let a = {
    x: 1,
    getX: function () {
        return this.x;
    }
};

let b = Object.create(a);

b.x = 10;

delete b.x;
console.log(b.getX());

console.log('********************************************');

let c = [1, 'a', { x: 1 }, { y: 2 }, [1, 2], { x: 1 }];
console.log(c.indexOf({ x: 1 }));

console.log('********************************************');

(function () {
    // var x = y = 10;
    y = 10;
    var x = y;
})();
console.log(y);

console.log('********************************************');

let d = [1, 2, 3];
d[3] = 4;
d[4] = 5;
d[-1] = 6;
d[-2] = 7;
d[-3] = 8;
d[10] = 10;

console.log(d[-3], d.length);
console.log(d);

for (let i = -3; i < d.length; i++) {
    console.log(i, d[i])
}

console.log('********************************************');

let e = {},
    f = {x: 12},
    g = [1, 2],
    h = {m: 'a', n: 'b'};

e[f] = 34;
e[g] = 56;
e[h] = 78;

console.log(e[f], e[g], e[h]);

arr = [];
arr[[{new: 'xxx'}]] = 356345345;
console.log(arr["[object Object]"]);
console.log([1, 2, 3].toString())
console.log({new: 'sdfd'}.toString());

console.log('********************************************');

var x1 = (x1 = 0, x1++, x1);
let y1 = (y1 = 0, y1++, y1);
console.log(x1, y1);