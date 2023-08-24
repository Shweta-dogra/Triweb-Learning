
let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];

//combining two array using spread operator
let combinedArray = [...a1, ...a2];

console.log(combinedArray);

//spread operator with objects

let obj = {stuName: "Ajit", age:20}

let obj1 = obj;

console.log("obj = ", obj);
console.log("obj1 = ", obj1);

obj1.stuName = "Suraj";

console.log("After updating obj = ", obj); //Ajit
console.log("After updating obj1 = ", obj1); //Suraj

