//array map
let arr = [1, 3, 2, 4, 5, 7, 6];

//map()
let arr1 = [];
for(let i =0; i<7; i++){
    arr1.push(arr[i]*2);
}
console.log(arr1);

//using map()
//any operation on each element on array
//and return same size of array

console.log("Using map");
let arr2 = arr.map((ele)=> ele*2);

console.log(arr2);

// the map function calls the provided function for each element in array
// map function does not execute the function for array element without value