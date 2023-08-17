
console.log(getNum3); //[Function: getNum3]

console.log(getNum3()); //3

function getNum3(){
    return 3;
}

console.log(getNum3()); //3



console.log(getNum2); //undefined
console.log(getNum2()) //Type Error: getNum2 is not a function

var getNum2 = function(){
    return 2;
}

console.log(getNum2()); //2



// console.log(getNum1); //Reference Error: can not acces getNum1 before initialisation

let getNum1 = function(){
    return 1;
}

console.log(getNum1()); //1

