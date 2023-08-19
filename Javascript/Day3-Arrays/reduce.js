let a = [10, 20, 30];

let total = a.reduce((acc, currVal)=> {return acc+currVal}, 0);

console.log(total);  //60

let total1 = a.reduce((acc, currVal)=> {return acc+currVal}, 10);

console.log(total1); //70