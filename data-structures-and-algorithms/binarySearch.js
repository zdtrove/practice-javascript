function binarySearch(arr, n) {
    var start = 0, end = arr.length - 1;
    while (start <= end) {
        var mid = Math.floor((end + start) / 2);
        if (arr[mid] === n) {
            return true;
        } else if (n > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}
// console.log(binarySearch([1, 2, 3, 4], 4)); // true
// console.log(binarySearch([1, 2, 3, 4], 5)); // false

function recursiveBinarySearch(arr, x, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return true;
    if (arr[mid] > x) return recursiveBinarySearch(arr, x, start, mid - 1);
    else return recursiveBinarySearch(arr, x, mid + 1, end);
}
// console.log(recursiveBinarySearch([1, 2, 3, 4], 4, 0, 4)); // true
// console.log(recursiveBinarySearch([1, 2, 3, 4], 5, 0, 4)); // false