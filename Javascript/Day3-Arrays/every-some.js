let arr = [1, 3, 5, 7, 9];

let stat = arr.every((element)=>element%2!=0);

console.log(stat); //true bcoz all elements are odd


let arr1 = [1, 3, 4, 7, 9];

let stat1 = arr1.every((element)=>element%2!=0);

console.log(stat1); //false


//some

let arr2 = [1, 3, 4, 5, 6];

let stat2 = arr2.some((element)=>element%2==0);

console.log(stat2); //true


let arr3 = [1, 3, 5, 7];

let stat3 = arr3.some((element)=>element%2==0);

console.log(stat3); //false