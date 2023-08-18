const str = String("Hi I am here");
console.log(str.charAt(0)); //H

console.log("First character is ", str[0]); // First character is H

const indexOfI = str.indexOf('I');
console.log("Index of I is ",indexOfI);  //Index of I is 3

const indexOfi = str.indexOf('i');
console.log("Index of i is ",indexOfi);  //Index of I is 1

const indexOfe = str.indexOf('e');
console.log("Index of e is ",indexOfe);  //Index of I is 9

const indexOfe2 = str.lastIndexOf('e');
console.log("Last Index of e is ",indexOfe2);  //Index of I is 11

if(str.startsWith('H')){
    console.log("Yes, str starts with 'H'");  //Yes, str starts with 'H'
} else{
    console.log("No, str does not starts with 'H'");
}

if(str.endsWith('H')){
    console.log("Yes, str ends with 'e'");  //Yes, str ends with 'e'
} else{
    console.log("No, str does not ends with 'e'");
}

if(str.includes("I")){
    console.log("Yes, it includes 'I'"); //Yes, it includes 'I'
} else{
    console.log("No, it does not includes 'I'");
}

//concate

