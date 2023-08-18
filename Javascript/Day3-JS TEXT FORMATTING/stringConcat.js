
const str = String("Hi I am here");

const str1 = "I am going";
const str2 =  str+str1;  //concatenation using + operator

console.log(str2); //Hi I am hereI am going

str3 = str.concat(str1); //concatenation using function
console.log(str3);  //Hi I am hereI am going