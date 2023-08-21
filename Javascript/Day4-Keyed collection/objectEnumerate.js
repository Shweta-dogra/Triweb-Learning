let obj = {name:"Shweta", add:"asdfg", mob:"1234", email:"dfg@123.tyh"};

for(const key in obj){
    console.log(`value on ${key} is ${obj[key]}`);
}

let getKeys = Object.keys(obj);
console.log(getKeys);