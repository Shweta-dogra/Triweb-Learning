//destructuring array

let arr = [1, 2, 4, 6, 8, 9];

let n0 = arr[0];
let n1 = arr[1];
let n2 = arr[2];
let n3 = arr[3];
let n4 = arr[4];
let n5 = arr[5];

console.log(n0," ",n1," ",n2," ",n3," ",n4," ",n5);

const[a1, a2, a3, a4, a5, a6] = arr;  //destructuring

console.log(a1, a2, a3, a4, a5, a6);

const [s1, s2] = arr;
console.log(s1, s2);

const [b1, b2, ...arr1] = arr;
console.log(b1, b2); //1, 2
console.log(arr1); //[4, 6, 8, 9]