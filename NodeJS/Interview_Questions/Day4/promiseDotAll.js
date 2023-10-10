//promise.all()
//wait for all the promises to get resolve  or for one to get reject

function fun1(){
    return new Promise((res, rej)=>{
        res("Function1");
    })
}

function fun2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Function2");
        }, 2000)
        
    })
}

function fun3(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Function3");
        }, 1000)
        
    })
}

Promise.all([fun1(), fun2(), fun3()])
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})