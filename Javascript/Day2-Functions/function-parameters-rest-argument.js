function addNum(a, b){
    console.log(a+b);
}

addNum(2, 3); //5 // 2, 3 are parameters

// arguments

function addNumbers(){
    let sum =0;

    for(let i =0; i<arguments.length; i++){
        sum = sum+arguments[i];
    }
    console.log(sum);
}

addNumbers(2, 5, 4, 3, 8); //22
addNumbers(2, 5); //7
addNumbers(1, 3, 2, 4, 6, 7, 8, 5, 7, 9, 7, 8); //67


//convert arguments into array

function add(){
    let arr = Array.from(arguments);  //arguments to array
    let sum =0;
    arr.forEach(ele=>{
        sum = sum+ele;
    });
    console.log(sum);
}
add(5, 7, 2); //14



//rest parameter

function multiply(multiplier, ...arg){
    arg.forEach(ele=>{
        console.log(multiplier*ele);
    })
}

multiply(2, 1, 2, 3, 4, 5);
multiply(5, 1, 2, 3, 4, 5);