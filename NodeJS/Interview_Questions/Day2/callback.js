/*
What is callback?
what is callback hell?
how to avoid callback hell?  => by using async await or promise
*/

/* Asynchronous, equivalent of a function
-> helps in non-blocking code
-> helps in performance of single thread NodeJS application

*/

console.log("Hello");
setTimeout(()=>{
    console.log("Here inside setTimeout")
}, 3000);
console.log("Hi");

//Hello
//Hi
//Here inside setTimeout