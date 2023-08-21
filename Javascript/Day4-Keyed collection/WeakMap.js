let name1 =  {name: "hi"};

let m = {[name1]: "Shweta"}

console.log(m[name1]); //Shweta

console.log(m); //[Object]

let wmap = new WeakMap();
let obj1 = {}
let obj2 = {1:1}
let obj3 = {2:2}

wmap.set(obj1, "val1");
wmap.set(obj2, "val2");
wmap.set(obj3, "val3");

let v1 = wmap.get(obj1);
console.log(v1); //val1
