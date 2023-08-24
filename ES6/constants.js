var a =5;
console.log(a);

a =7;
console.log(a);

const b = 3;
console.log(b);

// b=6;
console.log(b);//TypeError: Assignent to constant variable

const obj = {name: "Shweta", age:20};
console.log("Before", obj);

// obj = {name: "Shweta", age:25};  //TypeError: Assignent to constant variable

// console.log("After", obj);

obj.age = 25;
console.log("After", obj);
