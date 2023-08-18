console.log(Math.PI); //3/141...

console.log(Math.max(4, 8, 9)); //9
console.log(Math.min(4, 8, 9)); //4


let ran = Math.random();
console.log(ran); //0.98 //0.06

//one digit
let ran1 = Math.round(Math.random()*10, 1);  //1-10
console.log(ran1); //2

let rand1 = Math.round(Math.random()*10, 3);  //1-10
console.log(rand1); //2.65

//two digit
let ran2 = Math.round(Math.random()*100, 1);  //11-100
console.log(ran2); //67 //83


//math.floor
let ran3 = Math.floor(Math.random()*100, 1);  //11-100
console.log(ran2);

//convert to exponentioal
let num1 = 345000000;
let num2 = num1.toExponential();
console.log(num2); //3.45e+8


//to fix decimal degits

let num3 = Number(2.452309876).toFixed(2);
console.log(num3);  //2.45