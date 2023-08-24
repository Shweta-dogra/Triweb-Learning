let str = "whereami";

// let arr = Array.from(str);
// console.log(arr);

function checkDta(){
    console.log(arguments);
    let arr = Array.from(arguments);
    console.log(arr);

}
checkDta(1, 2, 3, 4, 5);

//keys of array

let arr1 = ['a', 'b', 'c', 'd'];

let keys = arr1.keys();

console.log(keys); //Object [Array Iterator]

for(let e of keys){
    console.log(arr1[e]);
}


//array.find()

let arr2 = [11, 12, 13, 14, 5, 15];
let firstOddNUm = arr2.find((value, index, arr2)=>{
        return value%2 != 0;
});

// function getOdd(value, index, arr2){
//     return value%2 != 0;
// }

console.log(firstOddNUm);

//array findIndex()

let arr3 = [12, 14, 5, 6, 8, 20];

let indexOfFirstOdd = arr3.findIndex((value, index, arr3)=>{
    return value%2 != 0;
});

console.log(indexOfFirstOdd); //2