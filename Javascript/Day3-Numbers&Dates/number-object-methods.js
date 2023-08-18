let x = 3/'r';
console.log(x); //Nan

if(!Number.isNaN(x)){
    console.log("x is a number");
} else{
    console.log("x is a Nan");  //x is a Nan
}


let xSafe = 9007199254740991;

console.log(Number.isSafeInteger(xSafe)); //true

let xSafe1 = 9007199254740992;

console.log(Number.isSafeInteger(xSafe1)); //false

let n1 = '1';
let n2 = '1.4';
console.log(Number.parseInt(n1));  //1
console.log(Number.parseFloat(n2)); //1.4

let n3 = Number.parseFloat(n2);

console.log(typeof(n3)); //number