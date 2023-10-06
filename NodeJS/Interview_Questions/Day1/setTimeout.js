function add(callBy, n1, n2){
    console.log(callBy,":", n1+n2);
}

setImmediate(()=>{
    add("setImmediate", 4, 3);
    //CHECK QUEUE for next cycle
});

setTimeout(()=>{
    add("setTimeout", 7, 3);
}, 0); //callback register with TIMER QUEUE for next cycle 

add("Direct", 1, 2);



//direct => setTimeout => setImmediate