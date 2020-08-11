let person1 = {
    name: 'Bob',
    sayName: function () {
        // this = person1
        setTimeout(function () {
            // this = window
            console.log(`I'm ${this.name}`);
        }, 1000);
    }
};
person1.sayName();

let person1_fix = {
    name: 'Bob',
    sayName: function () {
        let self = this;
        // this = person1_fix, self = person1_fix
        setTimeout(function () {
            // this = window, self = person
            console.log(`I'm ${self.name}`);
        }, 1000);
    }
};
person1_fix.sayName();

let person1_fix2 = {
    name: 'Bob',
    sayName: function () {
        // this = person
        setTimeout(function () {
            // this = person
            console.log(`I'm ${this.name}`);
        }.bind(this), 1000);
    }
};
person1_fix2.sayName();

let person2 = {
    name: 'Bob',
    sayName: () => {
        // this = window
        setTimeout(() => {
            // this = window
            console.log(`I'm ${this.name}`);
        }, 1000);
    }
};
person2.sayName();

let person3 = {
    name: 'Bob',
    sayName: function () {
        // this = person3
        setTimeout(() => {
            // this = person 3
            console.log(`I'm ${this.name}`);
        }, 1000);
    }
};
person3.sayName();

let person4 = {
    name: 'Bob',
    sayName: () => {
        // this = window
        setTimeout(function () {
            // this = window
            console.log(`I'm ${this.name}`);
        }, 1000);
    }
};
person4.sayName();

let cat = function () {
    return;
}

console.log(cat());

console.log(0 + '0');
console.log(0 - '0');
console.log(0 * '0');
console.log(0 / '0');