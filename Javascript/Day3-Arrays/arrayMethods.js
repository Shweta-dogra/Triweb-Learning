let arr1 = ['A', 'B', 'c', 'd'];

let arr2 = [1, 2, 3, 4];

console.log("concat");

console.log(arr1.concat(arr2));

console.log("-----------join-----------"); //array to string

let str = arr1.join(' ');
console.log(str);


console.log("-----------push-----------");
arr1.push('g');
console.log(arr1);

console.log("-----------pop-----------");

let elem = arr2.pop();
console.log(elem);
console.log(arr2);


console.log("-----------shift-----------");
let eleShift = arr1.shift();
console.log(eleShift);
console.log("array after shift ", arr1);


console.log("-----------unshift-----------");
let eleunShift = arr1.unshift('a');
console.log(eleunShift); //4
console.log("array after unshift ", arr1);


