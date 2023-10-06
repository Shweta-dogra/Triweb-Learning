/*
How to convert object to string and vice versa?
*/

let student ={
    sname: "Shweta",
    friend: "Neha",
    class: "BTech",
    mobile: 23456,
}
console.log(student);

//convert object to string
let stringFromObject = JSON.stringify(student);

console.log(stringFromObject);

//convert string to object
let objectFromString = JSON.parse(stringFromObject);

console.log(objectFromString);
console.log(objectFromString.sname);