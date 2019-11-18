let dummyData = 'ABC';

function test() {
    let num = 5;

    console.log('num', num);
    console.log('dummyData', dummyData);
}

// Idea: a function that receives a number and multiplies it with a constant

const constValue = 10;

function multiplyWith(num) {
    return num * constValue;
}

const result = multiplyWith(5);
console.log('result', result);