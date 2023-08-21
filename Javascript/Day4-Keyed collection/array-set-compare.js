let mySet = new Set([1, 2, 3, 4, 5]);
//delete an element by its value
mySet.delete(3);
console.log(mySet);

let arr = [1, 2, 3, 4, 5];
//delete an element by its value
arr.splice(arr.indexOf(3), 1);
console.log(arr);