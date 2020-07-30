function linearSearch(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true;
        }
    }
    return false;
}
// console.log(linearSearch([1,2,3,4,5,6,7,8,9], 6)); // true
// console.log(linearSearch([1,2,3,4,5,6,7,8,9], 10)); // false

function recursiveLinearSearch(arr, n, start = 0) {
    if (start >= arr.length) return false;
    if (arr[start] === n) return true;
    return recursiveLinearSearch(arr, n, start + 1);
}
console.log(recursiveLinearSearch([1,2,3,4,5,6,7,8,9], 6)); // true
console.log(recursiveLinearSearch([1,2,3,4,5,6,7,8,9], 10)); // false