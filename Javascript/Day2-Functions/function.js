
function add(n1, n2){
    let sum = n1+n2;          // scope of function & definition
    console.log(`sum = ${sum}`);
}

//calling a function
add(2, 4);


//passing value to a function (pass by value)

let a = 24;
let b = 45;

function increment(n){
    n = n+1;
    console.log(`Updated value = ${n}`);  //25
}

increment(a)  //passing a & b variable to the function add
console.log("a = ", a);   //24, the original value of a is not changed this happens when we pass by value or pass premitive value


//pass by reference

let obj ={
    n: "Shweta",
    age: 22
}

function updateObject(student){
    student.n = 'Hi'+ student.n;
    console.log(student);    //{n: "Hi Shweta", age: 22}
}

updateObject(obj);

console.log("old object is ", obj);  //{n: "Hi Shweta", age: 22}

//when we pass by reference , it changes the actual object

let arr = [1, 2, 3,4 ,5];
function addOne(a){
    for(let i =0; i<a.length; i++){
        a[i] = a[i]+1;
    }
    console.log(a);
}

addOne(arr);
console.log("Actual Array is ", arr);