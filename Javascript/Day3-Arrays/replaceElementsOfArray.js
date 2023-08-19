let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr2 = arr.splice(1, 4, 'a', 'b', 'c', 'd');

console.log(arr2);

console.log("Array after replacement ", arr);  // [1, 'a', 'b', 'c', 'd', 6, 7,   8,   9]

let arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 1, 'a', 'b', 'c');
console.log(arr3); //[1, 'a', 'b', 'c', 3, 4, 5]