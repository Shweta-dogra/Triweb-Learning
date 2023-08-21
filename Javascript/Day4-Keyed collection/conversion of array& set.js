let arr = [1, 2, 2, 3, 3, 3, 4, 4];
console.log(arr);

let setFromArray = new Set(arr);
console.log(setFromArray); //Set(4) {1, 2, 3, 4}

let arrayFromSet = Array.from(setFromArray);

arrayFromSet.push(3);
console.log(arrayFromSet); //[1, 2, 3, 4, 3]

//array from set using spread operator

let arrayFromSetUsingSpreadOperator = [...setFromArray];

arrayFromSetUsingSpreadOperator.push(2);

console.log(arrayFromSetUsingSpreadOperator);