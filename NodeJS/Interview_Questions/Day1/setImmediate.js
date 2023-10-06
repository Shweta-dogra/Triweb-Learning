let a =1;
let b =4;

function addTwoNumber(n1, n2){
    console.log(n1+n2);
}

//setImmediate
//not immediate as its name
//its callback is placed in the check queue of the next cycle of event loop
//CHECK QUEUE occurs later than the TIMER QUEUE

setImmediate(()=>{
    addTwoNumber(a, b);
})

//can I call above function inside setImmediate
//callback should be a function
//yes we can pass a function inside it

console.log("inside event loop 1");