
//default parameters values
function addNum(n1, n2 =0){//default parameter
    return n1+n2;
}
let sum = addNum(1, 3);
console.log("Sum= ", sum);


let sum1 = addNum(1);
console.log("Sum= ", sum1); //NaN


