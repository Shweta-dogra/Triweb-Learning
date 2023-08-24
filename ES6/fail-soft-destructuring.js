//fail soft destructuring

let arr = [1, 2];

let [a=2, b=10, c=0, d] = arr;

console.log(a, b, c, d); //1 2 0 undefined
