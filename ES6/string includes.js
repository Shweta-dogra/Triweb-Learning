let str = "This is a good place.";

console.log(str.includes("lace"));//true

console.log(str.includes("laace"));//flase

console.log(str.includes("Place"));//false

//starts with

console.log(str.startsWith('T')); //true

console.log(str.startsWith('This')); //true

console.log(str.startsWith('That')); //false

//ends with

console.log(str.endsWith("this")); //flase

console.log(str.endsWith("e.")); //true
