//promise.race(iterable)
// It will wait for atleast one Promise to get resolved or rejected

function fun1(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Function1");
        }, 2000)
        
    })
}

function fun2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Function2");
        }, 500) 
    })
}

function fun3(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            rej("Function3");
        }, 1000)
           
    })
}

const listOfPromises = [fun1(), fun2(), fun3()];

Promise.race(listOfPromises)
.then(result=>{
    console.log("Fulfilled ",result);
})
.catch(error=>{
    console.log("Rejected ",error);
})