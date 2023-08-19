let arr = [1, 2, 3, 4, 5, 6];

console.log("-----------slice-----------");  // copy but do not change original array
let arr1 = arr.slice(1, 4);
console.log("Slice array ", arr1);  //[2, 3, 4]
console.log("Original array after slice ", arr);  //[1, 2, 3, 4, 5, 6]


console.log("-----------splice-----------");  // cut and change original array
let arr2 = arr.splice(1, 4);
console.log("Splice array ", arr2);  //[2, 3, 4, 5]
console.log("Original array after splice ", arr);  // [1, 6]

