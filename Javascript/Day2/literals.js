//Literals

console.log("decimal", 117); 
console.log("binary", 0b10101); //21  //convert binary to decimal
console.log("octal", 0o7234); //3740    //convert octal to decimal
console.log("hexadecimal", 0x25A7); //9639      convert hex to decimal

console.log("binary", 0B10101); //capital B also works

//Object literals
let obj = {name: "Shweta", mob: "1234567890"};
console.log(obj); //obj = {name: "Shweta", mob: "1234567890"};
console.log(obj.name) // Shweta     dot notation
console.log(obj['mob']);  //1234567890    bracket notation

//Special keys of object

let obj1 = {'': "qwert", '!': "rtyu78"};
console.log(obj1['']); //qwert
console.log(obj1['!']);  //rtyu78

//String Literals

let s1 ="Double quote String";
let s2 ='Single quote String';

let name = "Shweta";
console.log(`Welcome ${name}`);
console.log(`Welcome ${name}.
How are you?`);

