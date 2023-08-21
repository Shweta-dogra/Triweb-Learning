let obj = {name:"Shweta", add: "wertyuhj"};

console.log(obj);
console.log(obj.email); //undefined

console.log("-----------------------------------");

let obj1 = new Object();
obj1.name = "adarsh";
obj1.a = "qwertyuiopolkjhgf";

console.log(obj1);

//dot notation
console.log(obj1.name);

//bracket notation
console.log(obj1['a']);

let x = "123";
obj1.x = "hi"; // x:"hi"

obj1[x] = "h1"; //123: "hi"

