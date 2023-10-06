function add(callFrom, n1, n2){
    console.log(callFrom,":", n1+n2);
}

setImmediate(()=>{
    add("setImmediate", 4, 3);
    
});

setTimeout(()=>{
    add("setTimeout", 7, 3);
}, 0); 

process.nextTick(()=>{
    add("Process nextTick", 8, 4);
});

add("Direct", 1, 2);

/*
=> It puts its callback at the front of the event queue
=> Execute after the code currently executed but before IO events or TIMERS
*/

// Direct : 3
// Process nextTick : 12
// setTimeout : 10
// setImmediate : 7
