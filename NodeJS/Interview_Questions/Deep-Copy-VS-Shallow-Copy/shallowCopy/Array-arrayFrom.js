const arr = [1, 2, 3];

const newArr = Array.from(arr);


console.log("Before arr- ", arr); //[1, 2, 3]
console.log("Before newArr- ", newArr); //[1, 2, 3]

arr[0]=8;

console.log("After arr- ", arr); //[8, 2, 3]
console.log("After newArr- ", newArr); //[1, 2, 3]