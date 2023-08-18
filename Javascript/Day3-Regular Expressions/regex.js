let str = "Hi I am here. I am attending a workshop";

let reex = /\w/; //for word

console.log(str.match(reex)); 

//test() method return true/false
let regex = new RegExp("am");

let result = regex.test(str); //true as str contains am
console.log(result);

//search() method  returns index
let reg1 = /\w/g; //search word
let str1 = "Hi i am taking a workshop";
let res = str1.search(reg1);
console.log(res); //0 finds word a t 0 index

console.log(str1[res]); //H

