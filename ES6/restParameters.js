
function addNum(...numbers){
    let sum =0;
    numbers.forEach((e)=>{
        sum = sum+e
    })

    return sum;
}

console.log(addNum(1, 2)); //3

console.log(addNum(2, 3, 4, 1 ,5)); //15


//advantage of rest parameter
function add(n1, n2, ...num){
    console.log("num1 = ", n1);
    console.log("num2 = ", n2);

    console.log("nums = ", num);
}

add(1, 2, 3, 4, 5, 6, 7, 8, 9);

