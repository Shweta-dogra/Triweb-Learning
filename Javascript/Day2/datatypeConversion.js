let n = 1;
console.log(typeof(n)); //Number

//We can convert data type of a variable during runtime

n = "qwert";
console.log(typeof(n)); //String

//TypeScript
let num1 =3;
let num2 = 5;
console.log(num1+num2); //8

let num3 = '3';
console.log(num3+num2); //35 (Concatenation)

//datatype conversion string -> number

console.log(parseInt(num3)+num2); //8

let n4 = "3.5";
let n5 = 5;
console.log(parseFloat(n4)+n5); //8.5

//convert using + operator
let n6 = "8";
let n7 = 4;
console.log(n6+n7); //84

console.log(+n6 + n7); //12

console.log(n6-n7); //4

console.log(n6*n7); //32

console.log(n6/n7); //2

//Use parseInt with Base

let n8 = "101";
console.log(parseInt(n8, 2)); //5     Converting binary value 101 to decimal    It handle 101 as binary

console.log(parseInt(n8, 16)); //257     Converting hexadecimal value 101 to decimal    It handle 101 as hexadecimal

console.log(parseInt(n8, 8)); //     Converting octal value 101 to decimal    It handle 101 as octal


